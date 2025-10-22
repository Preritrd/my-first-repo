const express = require("express");

const adminrouter = express.Router();
<<<<<<< HEAD
const AdminController = require('../Controllers/AdminController');

adminrouter.get("/admin_login", AdminController.getAdminlogin);
adminrouter.post("/update-food", AdminController.postupdatefood);
=======

adminrouter.get("/admin_login", (req, res) => {
    res.render("AdminLogin", { PageTitle: "Admin Login" });
});
adminrouter.post("/update-food", (req, res) => {
    res.render("Update_Food_Chart", { PageTitle: "Update Food Chart" });
})

adminrouter.post("/New_update_food", (req, res) => {
    res.render("NewFoodAdded", { PageTitle: "Update Food Chart" });
})
>>>>>>> 6d661721bb9966e7ab773bbe42b8ddd61a591fff

exports.adminrouter = adminrouter;
