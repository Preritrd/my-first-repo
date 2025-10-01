const { sumRequestHandler } = require("./math");

const requestHandler = (req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
    <style>
    * a{
    font-size:2rem;
    }
        body {
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            height: 80vh;
            width: 100vw;
            background-color: #ffffc7;
            font-family: Arial, sans-serif;
            overflow: hidden;
            gap:30px;
        }
        h1 {
            font-size: 7rem;
        }
    </style>
</head>
<body>
    <h1>Welcome To HomePage</h1>
    <a href="/calculator" alt="link">Go to Calculator</a>
</body>
</html>`);
        return res.end();

    } else if (req.url.startsWith("/calculator")) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<!DOCTYPE html>
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
            justify-content: center;
            align-items: center;
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
    <form action="/calculate-result" method="POST">
        <label>Additon of Two Numbers</label>
        <div class="flex">
            <input type="number" name="num1" placeholder="First Number" required>
            <input type="number" name="num2" placeholder="Second Number" required>
            <input class="btn" type="submit" value="Submit">
        </div>
        <a href="/" alt="link">Back to Homepage</a>
    </form>
</body>
</html>`);
        res.end();
    }

    // FIX: Ensure both method and URL match exactly
    else if (req.method === "POST" && req.url === "/calculate-result") {
        return sumRequestHandler(req, res);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 - Page Not Found</h1>");
        return res.end(); // Add return for consistency
    }
};

exports.requestHandler = requestHandler;
