const { Activity, Country } = require('../db');

const createActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    const nuevaActividad = await Activity.create({ name, difficulty, duration, season });

    const countriesEnDb = await Country.findAll({ where: { name: countries } });

    if (countriesEnDb.length > 0) {
      await nuevaActividad.addCountries(countriesEnDb);
    }

    return res.status(201).json({ message: 'Actividad creada exitosamente.' });
  } catch (error) {
    console.error('Error al crear la actividad:', error.message);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

module.exports = createActivity;