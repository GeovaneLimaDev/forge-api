import { Sequelize } from "sequelize";

export const conn = new Sequelize('forge', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    await conn.authenticate();
} catch (err) {
    console.log(err);
};