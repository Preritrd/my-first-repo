const express = require("express");
const homerouter = express.Router();

homerouter.get("/", (req, res) => {
    console.log("Handling / for Get", req.url, req.method);
    res.send(`<h1>I Received The Response</h1>`);
});

module.exports = homerouter;
