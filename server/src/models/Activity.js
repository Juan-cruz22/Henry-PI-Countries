const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        "Activity",
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            dificulty:{
                type: DataTypes.ENUM("1","2","3","4","5"),
                allowNull: false,
            },
            duration:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            season:{
                type: DataTypes.ENUM("verano", "invierno","primavera", "otoño"),
                allowNull: false,
            },
        },
        { timestamps: false }
    )
}