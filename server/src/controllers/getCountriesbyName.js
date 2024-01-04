const axios = require('axios');

const URL = 'http://localhost:5000';

const getCountriesbyName = async (req, res) => {
  try {
    const { name } = req.query; // Utilizar req.query

    if (!name) {
      return res.status(400).json({ error: 'El parámetro de consulta "name" es obligatorio.' });
    }

    const lowercaseName = name.toLowerCase();

    const response = await axios.get(`${URL}/countries`);
    const matchingCountries = response.data.filter(country =>
      country.name.common.toLowerCase().includes(lowercaseName)
    );

    if (matchingCountries.length > 0) {
      return res.status(200).json(matchingCountries);
    } else {
      return res.status(404).json({ message: 'No se encontraron países con el nombre proporcionado.' });
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

module.exports = getCountriesbyName;