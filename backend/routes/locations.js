import express from 'express';
import mongoUtil from '../db/mongoutil.js';

const locationRouter = express.Router();

locationRouter.get('/get-all', async (req, res) => {
    const db = mongoUtil.getLocationDb();
    const locations = await db.collection('treatment_center').find({}).toArray();
    res.send(locations);
});

locationRouter.get('/distance-from-location', async (req, res) => {
    const db = mongoUtil.getLocationDb();

    function calcDist(lat1, lon1, lat2, lon2) {
        // Converts numeric degrees to radians
        function toRad(value) {
            return value * Math.PI / 180;
        }

        var R = 6371; // km
        var dLat = toRad(lat2-lat1);
        var dLon = toRad(lon2-lon1);
        var lat1 = toRad(lat1);
        var lat2 = toRad(lat2);

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;
        return d;
    }

    const userCoordinates = JSON.parse(req.query.userCoordinates);
    const locations = await db.collection('treatment_center').find({}).toArray();
    const response = locations.map(location => {
        const locationCoordinates = location.coordinates.split(',').map(coord => parseFloat(coord));
        const distance = calcDist(userCoordinates.latitude, userCoordinates.longitude, locationCoordinates[0], locationCoordinates[1]);
        return {
            ...location,
            distance
        };
    });

    const sortedByDistance = response.sort((a, b) => a.distance - b.distance);

    res.send(sortedByDistance);
});

locationRouter.get('/coordinates', async (req, res) => {
    const db = mongoUtil.getLocationDb();
    const userCoordinates = req.query.userCoordinates;
    const locationRadius = req.query.locationRadius;
    const locations = await db.collection('locations').find({}).toArray();
    const filteredLocations = locations.filter(location => {
        const locationCoordinates = location.coordinates;
        const distance = Math.sqrt(Math.pow(userCoordinates[0] - locationCoordinates[0], 2) + Math.pow(userCoordinates[1] - locationCoordinates[1], 2));
        return distance <= locationRadius;
    });
    res.send(filteredLocations);
});

export default locationRouter;