import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

const Project = conn.define('Project', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    deadline: {
        type: DataTypes.DATE,
        allowNull: true
    }
})

export default (Project)