const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Routers
const hostrouter = require("./routes/hostrouter");
const storerouter = require("./routes/storerouter");
const { mongoConnect } = require("./utils/databaseutil");

// Set view engine
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Use routers
app.use(hostrouter);
app.use(storerouter);

// 404 page
app.use((req, res, next) => {
    res.status(404).render('404Page', { PageTitle: "Page Not Found" });
});

// // Start server
const PORT = 3000;

const startServer = async () => {
    try {
        await mongoConnect(); // Make sure mongoConnect returns a Promise
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

startServer();
