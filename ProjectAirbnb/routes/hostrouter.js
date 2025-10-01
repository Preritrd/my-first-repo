const express = require("express");
const path = require("path");
const hostrouter = express.Router();

hostrouter.get("/add-home", (req, res, next) => {
    res.render('addhome', { PageTitle: "Add Home to Airbnb", CurrentPage: "addHome" });
})

const registerhomes = [];

hostrouter.post("/add-home", (req, res, next) => {
    console.log("Home Registartion Successful for : ", req.body);
    registerhomes.push(req.body);
    res.render('homeadded', { PageTitle: "Home Added Successfully" });
})

exports.hostrouter = hostrouter;
exports.registerhomes = registerhomes;

//Singal way to export Module
// module.exports = hostrouter;
// module.exports=registerhomes;

