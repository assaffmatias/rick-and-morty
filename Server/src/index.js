const express = require("express");
const router = require("./routes");
const server = express();
const PORT = process.env.PORT || 3001;
const { conn } = require('./db');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json());
 server.use("/rickandmorty", router);
conn.sync({force: false}).then(() => {
    server.listen(PORT, "0.0.0.0", () => {
        console.log(`Server run in port: ${PORT}`)
    })
})