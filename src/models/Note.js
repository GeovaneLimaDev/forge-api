import { DataTypes, Model } from "sequelize";
import { conn } from "../config/database.js";

class Note extends Model {}

Note.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    }

}, {
    sequelize: conn,
    modelName: "Note"
})

export default (Note)
