import { DataTypes } from "sequelize";
import { conn } from "../config/databese.js";

const Feature = conn.define('Feature', {
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

})

export default (Feature)