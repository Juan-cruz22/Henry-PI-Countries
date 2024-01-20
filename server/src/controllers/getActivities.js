const { Activity, Country } = require('../db');

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: [{
        model: Country,
        attributes: ['name'],
        through: { attributes: [] },
      }],
    });

    return res.status(200).json(activities);
  } catch (error) {
    console.error('Error al obtener las actividades:', error.message);
    return res.status(500).json({ error: 'Error del servidor.' });
  }
};

module.exports = getActivities;