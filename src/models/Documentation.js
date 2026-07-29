import { DataTypes } from "sequelize";
import { conn } from "../config/databese.js";

const Documentation = conn.define('Documentation', {
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true 
    }
})

export default (Documentation)