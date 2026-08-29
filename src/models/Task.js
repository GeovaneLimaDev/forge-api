import { DataTypes, Model } from "sequelize";
import { conn } from "../config/database.js";

class Task extends Model {}

Task.init({
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
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: conn,
    modelName: "Task"
})

export default (Task)
