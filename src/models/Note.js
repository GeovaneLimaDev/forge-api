import { DataTypes } from "sequelize";
import { conn } from "../config/databese.js";

const Note = conn.define('Note', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    }

})

export default (Note)