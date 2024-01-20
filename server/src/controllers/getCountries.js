
const axios = require('axios');

const URL = `http://localhost:5000`;

const getCountries = async (req, res) => {
    try {
        const response = await axios.get(`${URL}/countries`);
        const countries = response.data;

        if (countries && countries.length > 0) {
            return res.status(200).json(countries);
        } else {
            return res.status(404).send('No se encontraron países');
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getCountries;