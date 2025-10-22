const express = require("express");

const adminrouter = express.Router();
const AdminController = require('../Controllers/AdminController');

adminrouter.get("/admin_login", AdminController.getAdminlogin);
adminrouter.post("/update-food", AdminController.postupdatefood);

exports.adminrouter = adminrouter;
