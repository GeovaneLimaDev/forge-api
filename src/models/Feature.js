import { DataTypes, Model } from "sequelize";
import { conn } from "../config/database.js";

class Feature extends Model {}

Feature.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    sequelize: conn,
    modelName: "Feature"
})

export default (Feature)
