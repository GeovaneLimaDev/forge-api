import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";
import { hash } from "bcryptjs";

const Sessions = conn.define('Sessions', {
    hashToken: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default (Sessions)