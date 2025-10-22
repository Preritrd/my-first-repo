//Core Module
const path = require("path");
//External Module
const express = require("express");
// Local Module
const { userrouter } = require("./routes/userrouter");
const { hostrouter } = require("./routes/hostrouter");
// const  {registerhomes}=require("./")

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");


app.use(express.urlencoded({ extended: true }));
// Is middleware in Express.js that parses incoming form data
// (from HTML forms) and makes it available in req.body.
app.use(userrouter); // Extract from other file
app.use(hostrouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).render('404Page', { PageTitle: "Page not found" })
});


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

