const express = require("express");

const adminrouter = express.Router();

adminrouter.get("/admin_login", (req, res) => {
    res.render("AdminLogin", { PageTitle: "Admin Login" });
});
adminrouter.post("/update-food", (req, res) => {
    res.render("Update_Food_Chart", { PageTitle: "Update Food Chart" });
})

adminrouter.post("/New_update_food", (req, res) => {
    res.render("NewFoodAdded", { PageTitle: "Update Food Chart" });
})

exports.adminrouter = adminrouter;
