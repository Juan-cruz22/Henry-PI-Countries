const axios = require('axios');

const URL = 'http://localhost:5000';

const getCountriesbyName = async (req, res) => {
  try {
    const { name } = req.params;

    if (!name) {
      return res.status(400).json({ error: 'El parámetro "name" es obligatorio.' });
    }

    const lowercaseName = name.toLowerCase();

    const response = await axios.get(`${URL}/countries`);
    const matchingCountries = response.data.filter(country =>
      country.name.common.toLowerCase().includes(lowercaseName) // el lowercaseName comprueba si la cadena contien una subcadena. ({name: {common:"Argentina"}})
    );

    if (matchingCountries.length > 0) {
      return res.status(200).json(matchingCountries);
    } else {
      return res.status(404).json({ message: 'No se encontraron países con ese nombre.' });
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
    return res.status(500).json({ error: 'Error del servidor.' });
  }
};

module.exports = getCountriesbyName;