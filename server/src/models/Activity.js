const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Activity = sequelize.define(
    'Activity',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      season: {
        type: DataTypes.ENUM('verano', 'invierno', 'primavera', 'otoño'),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  
  return Activity;
};