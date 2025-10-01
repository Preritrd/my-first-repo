// const customerrouter=require("express").Router(); // Alternative way to create router
const express = require("express");
const customerrouter = express.Router();

customerrouter.get("/", (req, res) => {
    res.render("Home", { PageTitle: "Welcome to TastyBites" });
});
customerrouter.post("/menu", (req, res) => {
    res.send("<h1> Here is our delicious menu, Working in Processing...... </h1>");
});
customerrouter.get("/Order-Food", (req, res) => {
    res.render("Order_Food", { PageTitle: "Order_Food" });
})

customerrouter.post("/OrderedConfirmation", (req, res) => {
    res.render("OrderedConfirmation", { PageTitle: "Ordered Confirmation" });
})
customerrouter.get("/AnotherOrder", (req, res) => {
    res.render("Order_Food", { PageTitle: "Place Another Order" });
})

exports.customerrouter = customerrouter;
