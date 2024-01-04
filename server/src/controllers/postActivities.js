const { Activity, Country } = require('../db');

const createActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    if (!name || !difficulty || !duration || !season || !countries || countries.length === 0) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios, y debe haber al menos un país asociado.' });
    }

    // Crear la actividad en la base de datos
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    // Asociar la actividad con los países proporcionados
    const countriesInDb = await Country.findAll({ where: { name: countries } });
    await newActivity.setCountries(countriesInDb);

    return res.status(201).json({ message: 'Actividad creada exitosamente.' });
  } catch (error) {
    console.error('Error al crear la actividad:', error.message);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

module.exports = createActivity;