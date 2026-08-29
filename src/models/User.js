import { DataTypes, Model } from "sequelize";
import { conn } from "../config/database.js";

class User extends Model {}

User.init({
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
        allowNull: false,
        unique: true
    }
}, {
    sequelize: conn,
    modelName: "User"
})

export default (User)
