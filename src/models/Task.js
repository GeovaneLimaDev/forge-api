import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

const Task = conn.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})

export default (Task)