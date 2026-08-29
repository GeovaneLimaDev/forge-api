import { DataTypes, Model } from "sequelize";
import { conn } from "../config/database.js";

class Project extends Model {}

Project.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    deadline: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: conn,
    modelName: "Project"
})

export default (Project)
