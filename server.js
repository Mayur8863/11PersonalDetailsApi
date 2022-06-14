const express = require("express");
const app = express();
const http = require("http");
app.use(express.json());
const db = require('./confiq/db');
db.authenticate()
    .then(()=> {
        console.log("Database connected")
    })
    .catch((err)=>{
        console.log(`Error: ${err}`);
    })

const userRoutes = require("./routes/user")
app.use("/users",userRoutes);

const server = http.createServer(app);
const port =3000;
server.listen(port,()=>{
    console.warn(`server Started on port no : ${port}`);
})