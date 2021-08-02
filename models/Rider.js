const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Rider extends Model { }

Rider.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'rider',
    }
);

module.exports = Rider;