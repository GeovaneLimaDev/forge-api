import { DataTypes, Model } from "sequelize";
import { conn } from "../config/database.js";

class Documentation extends Model {}

Documentation.init({
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true 
    }
}, {
    sequelize: conn,
    modelName: "Documentation"
})

export default (Documentation)
