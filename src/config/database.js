import { Sequelize } from "sequelize";

export const conn = new Sequelize('forge', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    conn.authenticate();
} catch (err) {
    console.log(err);
};