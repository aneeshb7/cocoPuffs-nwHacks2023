import express from 'express';
import mongoUtil from '../db/mongoutil.js';

const locationRouter = express.Router();

locationRouter.get('/get-all', async (req, res) => {
    const db = mongoUtil.getLocationDb();
    const locations = await db.collection('treatment_center').find({}).toArray();
    res.send(locations);
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