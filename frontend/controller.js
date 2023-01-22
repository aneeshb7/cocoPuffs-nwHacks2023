 const url = 'http://10.19.129.45:3000'

const controller = {
    getAllLocations: async function() {
        try {
            const response = await fetch(`${url}/locations/get-all`);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    },
    
    getLocationsByCoordinates: async function(coordinates, radius) {
        const response = await fetch(`${url}/locations/get-all`);
        const locations = await response.json();
        return locations;
    }
}

export default controller