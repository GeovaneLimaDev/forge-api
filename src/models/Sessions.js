import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

const Sessions = conn.define('Sessions', {
    hashToken: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default (Sessions)