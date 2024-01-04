const { Activity, Country } = require('../db');

const getActivities = async (req, res) => {
  try {
    // Obtener todas las actividades con sus países asociados
    const activities = await Activity.findAll({
      include: [
        {
          model: Country,
          attributes: ['name'], // Puedes especificar las propiedades del país que deseas incluir
        },
      ],
    });

    return res.status(200).json(activities);
  } catch (error) {
    console.error('Error al obtener las actividades:', error.message);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

module.exports = getActivities;