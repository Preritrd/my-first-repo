exports.getAdminlogin = (req, res, next) => {
   res.render("AdminLogin", { PageTitle: "Admin Login" });
}

exports.postupdatefood = (req, res, next) => {
   res.render("Update_Food_Chart", { PageTitle: "Update Food Chart" });
}