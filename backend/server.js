const express = require("express");
const dotenv = require('dotenv');
dotenv.config({ path: "../.env" });
const app = express();
const PORT = process.env.PORT;


app.get("/", (req, res) => {
    res.send("hello World")
})

app.listen(PORT, (err) => err ? console.log(err) : console.log(`Server is Running on ${PORT}`))