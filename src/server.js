import { app } from "./app.js";
import { conn } from "./config/database.js";

conn.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server rodando!')
    })
}).catch((err) => {
    console.log(err)
})