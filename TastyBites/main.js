const express = require("express");
const path = require('path');
<<<<<<< HEAD
const mongoose = require('mongoose');

const { adminrouter } = require("./routes/adminrouter");
const { customerrouter } = require('./routes/customerrouter');
const app = express();


const DB_PATH = "mongodb+srv://Cloud9958:Cloud9958@cluster5.7ykhzdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster5";

app.use(express.static('public'));
app.use(adminrouter);
app.use(customerrouter);

app.set('views', path.join(__dirname, 'templateviews'));
app.set('view engine', 'ejs');
=======
const { adminrouter } = require("./routes/adminrouter");
const { customerrouter } = require('./routes/customerrouter');
const app = express();
// Root route
app.use(adminrouter);  // Use the admin router for /admin routes;
app.use(customerrouter);

app.set('views', path.join(__dirname, 'templateviews')); // <- use your folder name
app.set('view engine', 'ejs'); // keep your view engine
>>>>>>> 6d661721bb9966e7ab773bbe42b8ddd61a591fff

app.use((req, res) => {
    res.status(404).render("404Page", { PageTitle: "404 Page Not Found" });
})
<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

mongoose.connect(DB_PATH)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error connecting to MongoDB:', err);
  });
=======
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
const port = 3000;
app.listen((port), () => {
    console.log(`🛰️  Server running on http://localhost:${port}`)
})
>>>>>>> 6d661721bb9966e7ab773bbe42b8ddd61a591fff
