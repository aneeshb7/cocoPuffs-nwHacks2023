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
    },

    getLocationWithDistance: async function(coordinates) {
        try {
            const response = await fetch(`${url}/locations/distance-from-location?userCoordinates=${JSON.stringify(coordinates)}`);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    },

    getChatBotResponse: async function(input) {
        try {
            const response = await fetch(`${url}/chatbot/talk-to-bot?input=${input}`);
            const res = await response.text();
            return res;
        } catch(error) {
            console.error(error);
        }
    }
}

export default controller