const express = require("express");
const path = require('path');
const { adminrouter } = require("./routes/adminrouter");
const { customerrouter } = require('./routes/customerrouter');
const app = express();
// Root route
app.use(adminrouter);  // Use the admin router for /admin routes;
app.use(customerrouter);

app.set('views', path.join(__dirname, 'templateviews')); // <- use your folder name
app.set('view engine', 'ejs'); // keep your view engine

app.use((req, res) => {
    res.status(404).render("404Page", { PageTitle: "404 Page Not Found" });
})
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
const port = 3000;
app.listen((port), () => {
    console.log(`🛰️  Server running on http://localhost:${port}`)
})