import fetch from 'node-fetch';

const url = "http://localhost:8080"

getAllLocations = async function() {
    const response = await fetch(url + '/locations/get-all');
    const locations = await response.json();
    return locations;
}

getLocationsByCoordinates = async function(coordinates, radius) {
    const response = await fetch(url + '/locations/coordinates?userCoordinates=' + coordinates + '&locationRadius=' + radius);
    const locations = await response.json();
    return locations;
}

export default {
    getAllLocations, 
    getLocationsByCoordinates
}