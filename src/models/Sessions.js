import { DataTypes, Model } from "sequelize";
import { conn } from "../config/database.js";

class Sessions extends Model {}

Sessions.init({
    hashToken: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: conn,
    modelName: "Sessions"
})

export default (Sessions)
