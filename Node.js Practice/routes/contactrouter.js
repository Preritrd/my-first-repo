const express = require("express");
const contactrouter = express.Router();


contactrouter.get("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for Get", req.url, req.method);
    res.send(
        `<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            border: none;
            font-family: sans-serif;
        }
             * a{
    font-size:2rem;
    }

        body {
            width: 100%;
            height: 80vh;
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            gap:20px;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
        }

        label {
            font-size: 2rem;
        }

        .flex {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 25px;
        }

        input {
            padding: 1rem;
            border-radius: 1rem;
            border: 1px solid grey;
            font-size: 1rem;
        }
    </style>
</head>

<body>
<h1>Please Provide Your Details Here.......</h1>
    <form action="/contact-us" method="POST">
        <div class="flex">
            <input type="text" name="fullname" placeholder="First Name" required>
            <input type="email" name="email" placeholder="Enter Your email" required>
            <input class="btn" type="submit" value="Submit">
        </div>
        <a href="/" alt="link">Back to Homepage</a>
    </form>
</body>
</html>`)
});

contactrouter.post("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for POST", req.url, req.method);
    res.send(`<h1>Thank You For Your Details</h1>`)
})

module.exports = contactrouter;