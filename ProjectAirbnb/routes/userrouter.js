const express = require("express");
const { registerhomes } = require("./hostrouter");
const userrouter = express.Router();


userrouter.get("/", (req, res, next) => {
    console.log(registerhomes);
    res.render('home', { registerhomes: registerhomes, PageTitle: "Airbnb Home", CurrentPage: "Home" });
})
exports.userrouter = userrouter;

//Singal way to export Module
// module.exports = userrouter;
