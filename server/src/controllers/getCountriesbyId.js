const axios = require('axios');

const URL = `http://localhost:5000`;

const getCountriesById = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await axios.get(`${URL}/countries`);
        const countries = response.data;

        const country = countries.find(country => country.cca3 === id);

        if (country) {
             return res.status(200).json(country);
        } else {
            return res.status(404).send('País no encontrado');
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getCountriesById;