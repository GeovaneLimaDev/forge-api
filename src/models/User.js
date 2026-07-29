import { DataTypes } from "sequelize";
import { conn } from "../config/databese.js";

const User = conn.define('User', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default (User)