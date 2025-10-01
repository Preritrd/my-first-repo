//<!-- ||--------------------------||====|> Backend Development Node.js <|====||<-----------------------------------|| -->

//Setting Threads Size......
// process.env.UV_THREADPOOL_SIZE = 10;

// const { response } = require("express");

//<!-- ||------------------||====|> Modules in Node.js <|====||<--------------------|| -->

// console.log("Hello World"); //node .\Node.js\server.js
// const { addfn, subfn } = require('./math'); // Destructuring

// const math = require('./math'); // ./ is used to search a file in current directory,
// // If ./ not mentioned it searches in-built packages or installed packages
// // console.log(add(4, 5));

// // console.log(math.add(5, 6)); //🔑 Your current  [ERROR] happens because:
// // If you wrote module.exports = add; → then you must call it like add(5, 6) (Option 1).
// // If you want math.add(5, 6) → you must use module.exports = { add } (Option 2.
// // The error TypeError: math.add is not a function means your math.js is only exporting the function itself, not an object with .add.

// // console.log("The Value is : ", addfn(5, 9));
// console.log("The Value is : ", math);

//<!-- ||------------------||====|> EcmaScipt Modules in Node.js <|====||<--------------------|| -->
// EcmaScipt Modules
// import http from "http" //Modern way to import module

// import { a, b } from "./math.js"
// console.log(a, b);

// import call from "./math.js"
// console.log(call);


//<!-- ||------------------||====|> File Handling in Node.js <|====||<--------------------|| -->

// const fs = require("fs");
// //Synchronous Call....  and It is Blocking Request.....
// // fs.writeFileSync('./test.txt', 'Hey There, How are You? Sync...');

// // Asynchronous Call.... and It is Non-Blocking Request....
// fs.writeFile('./test.txt', 'Hey There, How are You? Async...', (error) => { });

// const fs = require("fs");

// const result = fs.readFileSync('./contacts.txt', "utf-8");
// console.log(result); // Synchronous Give return;


// const result=fs.readFile("./contacts.txt", "utf-8", (error, result) => {}); Not Allowed , bcz it Doesn't return

// const fs = require("fs");

// fs.readFile("./contacts.txt", "utf-8", (error, result) => {
//     if (error) {
//         console.log("Error", error);
//     } else {
//         console.log(result);
//     }
// }) // Asynchronous Don't give error, It expected us to give call back func with two arguments (error,result);

// const fs = require("fs");
// fs.appendFileSync("./test.txt", `\n${Date.now()} Hey There\n`);
// fs.cpSync('./test.txt', './copy.txt');
// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./test.txt"));
// console.log(fs.statSync("./test.txt").isFile());
// // console.log(fs.statSync("./copy.txt"));

// console.log(fs.statSync("./test.txt"));

// fs.mkdirSync('documentfile');
// fs.mkdirSync("documentfile/d1/d2", { recursive: true });


// // Create a Server file
// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello, world!!!!!");
// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });

//<!-- ||----------||===|> Blocking and Non-Blocking Request in Node.js <|===||----------|| -->

// Blocking and Non-Blocking Request
// const fs = require("fs");
// const os = require("os");

// console.log(os.cpus().length);
// //Blocking Request
// const result = fs.readFileSync('contacts.txt', 'utf-8');
// console.log(result);

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// // Non-Blocking Request
// fs.readFile('contacts.txt', 'utf-8', (err, result) => {
//     console.log(result);
// });
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");
// console.log("10");

// // Default Thread Pool Size=4;
// // MAX? - 8core cpu-8

// //Setting Threads Size......
// process.env.UV_THREADPOOL_SIZE = 10;

// const fs = require("fs");
// const crypto = require("crypto");

// const start = Date.now();

// setTimeout(() => {
//     console.log('Hello from Timer 1')
// }, 0);

// setImmediate(() => {
//     console.log('Hello from Immediate fn 1');
// })

// fs.readFile("contacts.txt", "UTF-8", () => {
//     console.log("IO Polling => Finish");

//     setTimeout(() => {
//         console.log('Hello from Timer 2 inside of readfile');
//     }, 0)

//     setTimeout(() => {
//         console.log('Hello from Timer 3 inside of readfile');
//     }, 5000)
//     setImmediate(() => {
//         console.log('Hello from Immediate fn 2');
//     })

//     //CPU Intensive Work.....
//     crypto.pbkdf2("password@1", "salt1", 100000, 1024, "sha512", () => {
//         console.log(`${Date.now() - start}ms`, "Password 1 Successfully")
//     })
//     crypto.pbkdf2("password@2", "salt1", 100000, 1024, "sha512", () => {
//         console.log(`${Date.now() - start}ms`, "Password 2 Successfully")
//     })
//     crypto.pbkdf2("password@3", "salt1", 100000, 1024, "sha512", () => {
//         console.log(`${Date.now() - start}ms`, "Password 3 Successfully")
//     })
//     crypto.pbkdf2("password@4", "salt1", 100000, 1024, "sha512", () => {
//         console.log(`${Date.now() - start}ms`, "Password 4 Successfully")
//     })
//     crypto.pbkdf2("password@5", "salt1", 100000, 1024, "sha512", () => {
//         console.log(`${Date.now() - start}ms`, "Password 5 Successfully")
//     })
//     crypto.pbkdf2("password@6", "salt1", 100000, 1024, "sha512", () => {
//         console.log(`${Date.now() - start}ms`, "Password 6 Successfully")
//     })
// })

// console.log('Hello from Top Level Code');

//<!-- ||-------------------------------------------||====|> Building HTTP Server in Node.js <|====||<---------------------------------------------|| -->

// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const Nodeserver = http.createServer((req, res) => {
//     if (req.url === '/favicon.ico') return res.end();
//     const log = `${Date.now()}: ${req.url}: New Req Recieved\n`;
//     const myurl = url.parse(req.url, true);
//     console.log(myurl);
//     fs.appendFile('log.txt', log, (err, data) => {
//         switch (myurl.pathname.toLowerCase()) {
//             case '/': res.end("Welcome to My Site");
//                 break;
//             case '/about':
//                 const username = myurl.query.myname;
//                 res.end(`Hi, ${username}`);
//                 break;
//             case '/contact': res.end("Contact me at : ...............");
//                 break;
//             case '/services': res.end("Our Services are : ...........");
//                 break;
//             case '/signup': res.end("SignUp Page : ..............");
//                 break;
//             case '/search':
//                 const search = myurl.query.search_query;
//                 res.end("Here are Yours Results for" + search);
//             default: res.end("404 Not found");
//         }
//     });
//     console.log("Over");
// });

// Nodeserver.listen(3000, () => {
//     console.log("Server Started!!");
// })

// "About Me : I am Prerit and I am Multi-Billionaire",


//   https://www.preritrd5.webdev[/]->patha
// Protocol: //Domain-> User Friendly Name of IP Address of
// Hypertext // My Server
// Transfer
// Protocol
// Secure


// <!-----------------------------------------------||====|> Practice Node.js <|====||<------------------------------------------------|||-->

//Q1)  Write a Node.js program to parse the following URL and display its components:
//https://example.com:8080/products/item?id=42&color=red#details.


// Note: const { URL } = require('url'); //The URL class lets you easily work with different parts of a URL.
// Create a new URL object :  const myUrl = new URL("https://example.com:8080/products/item?id=42&color=red#details");
// ===> This turns the URL string into an object, so you can access its components directly.



// const { URL } = require('url');

// // Create a new URL object
// const myUrl = new URL("https://example.com:3000/products/item?id=42&color=red#details");

// // Extract components
// console.log("Protocol:", myUrl.protocol);
// console.log("Hostname:", myUrl.hostname);
// console.log("Port:", myUrl.port);
// console.log("Path:", myUrl.pathname);
// console.log("Query:", myUrl.search);
// console.log("Hash:", myUrl.hash);


// Q2.Write a Node.js program to resolve the IP address of www.google.com.
// { URL is a user-friendly name for an IP address }
// const http = require('http');
// const url = require('url');

// http.createServer((req, res) => {
//     const parsed = url.parse(req.url, true);
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(`ID: ${parsed.query.id}, Color: ${parsed.query.color}`);
// }).listen(3000);

// console.log("Run: http://localhost:3000/?id=100&color=blue");


// 3Q) Write a Node.js server that extracts id and color from query parameters in the URL.

// const http = require('http');
// const url = require('url');

// http.createServer((req, res) => {
//     const parsed = url.parse(req.url, true);
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(`ID: ${parsed.query.id}, Color: ${parsed.query.color}`);
// }).listen(3000);

// console.log("Run: http://localhost:3000/?id=100&color=blue");

// Q4. Write a Node.js server that redirects /x1 to a longer URL.
// //   // Reducing long URL requests (efficiency)
// const http = require('http');

// // Short URL paths mapped to real URLs
// const shortUrls = {
//     "/x1": "https://www.google.com",
//     "/x2": "https://www.wikipedia.org"
// };

// http.createServer((req, res) => {
//     if (shortUrls[req.url]) {
//         // Redirect to the real URL
//         res.writeHead(302, { Location: shortUrls[req.url] });
//         res.end();
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' }); // Not found
//         res.end("Short URL not found");
//     }
// }).listen(3000);

// console.log("Server running at http://localhost:3000/");
// console.log("Try visiting: http://localhost:3000/x1 or http://localhost:3000/x2");

// const http = require('http');
// const url = require('url');

// http.createServer((req, res) => {
//     const parsed = url.parse(req.url, true);
//     console.log("Path:", parsed.pathname);
//     console.log("Query Params:", parsed.query);
//     res.end("Check console for parsed URL details");
// }).listen(3000);
// // Path: /favicon.ico
// Query Params: [Object: null prototype] { }
// Path: /Signup
// Query Params: [Object: null prototype] { }
// Path: /products
// Query Params: [Object: null prototype] { id: '10', category: 'books' }
// Path: /favicon.ico
// Query Params: [Object: null prototype] { }
// Path: /about
// Query Params: [Object: null prototype] { id: '10', category: 'books' }


// <!----------------------------------------------------||====|> Express.js <|====||<----------------------------------------------------||-->

// // Same like above, but in more cleaner and efficient way (i.e Using Express.js Framework)

// // const http = require('http'); // http module aslo not required, express internal creates;
// const express = require("express");
// const app = express(); // This app is a Handler Function


// //// Routes Structure {app.Method(Path , Handler)}
// //// Where : ==> app is instance of express.
// ////         ==> Method is an HTTP request method, in lowercase.
// ////         ==> Path is a path on the server.
// ////         ==> HANDLER is the function executed when the route is matched.

// app.get('/', (req, res) => {
//     return res.send("Hello!!, Welcome To My Home Page " + "hey " + req.query.name + " Your ID is " + req.query.id);
// })
// app.get("/about", (req, res) => {
//     return res.send("Hello!!, Welcome To My About Page");
// })

// function myHandler(req, res) {
// }
// app.listen(3000, () => {
//     console.log("Server Started!");
// });

// // // const myServer = http.createServer(app);
// // // myServer.listen(3000, () => {
// // //     console.log("Server Started!");
// // // })

// // <!-------------||====|> How Versioning Works in Node.js <|====||<-------------||-->

// // Version

// // ^5.1.0

// // 1st Part -> 5  // Major Updation
// // 2nd Part -> 1  // Recommadation updation
// // 3rd Part -> 2  // last bit, minor updation

// // ^ -> Install all Recommended and Minor Fixes Automatically.
// // ~ -> Install all Recommende of only last bit.


// <!-------------------------------------||====|> Building REST API's using Node and EXpress.js <|====||<-------------------------------------||-->
// const express = require("express");

// const users = require("./MOCK_DATA.json");

// const app = express();
// const port = 3000;

// app.use(express.json()); // Middleware to parse JSON request bodies
// It is middleware that tells Express how to automatically parse incoming JSON data in the request body.

// // Get Request On user
// app.get('/users', (req, res) => {
//     const html = `
//     <ul>
//         ${users.map((user) => `<li>${user.first_name} </li>`).join("")}
//     </ul>`;
//     res.send(html);
// });

// // // Routes
// // app.get('/api/users', (req, res) => {
// //     return res.json(users);
// // })

// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     if (user) {
//         return res.json(user);
//     } else {
//         console.log("User Does not exist");
//         return res.status(404).json({ error: "User not found" });
//     }
// });

// // app.post("/api/users", (req, res) => {
// //     // TODO: Create new User
// //     return res.json({ status: "pending" });
// // });

// // app.patch("/api/users", (req, res) => {
// //     // TODO: Edit the user with ID
// //     return res.json({ status: "pending" });
// // });

// // app.delete("/api/users", (req, res) => {
// //     // TODO: Delete the user with ID
// //     return res.json({ status: "pending" });
// // });


// // // Create new user
// // app.post("/api/users", (req, res) => {
// //     const newUser = req.body;

// //     if (!newUser.first_name || !newUser.last_name || !newUser.email) {
// //         return res.status(400).json({ error: "Missing required fields" });
// //     }

// //     // Generate a new unique ID
// //     const newId = users.length ? users[users.length - 1].id + 1 : 1;
// //     const userWithId = { id: newId, ...newUser };
// //     users.push(userWithId);

// //     return res.status(201).json(userWithId);
// // });

// // // Edit user by ID
// // app.patch("/api/users/:id", (req, res) => {
// //     const id = Number(req.params.id);
// //     const updates = req.body;

// //     const userIndex = users.findIndex(user => user.id === id);

// //     if (userIndex === -1) {
// //         return res.status(404).json({ error: "User not found" });
// //     }

// //     users[userIndex] = { ...users[userIndex], ...updates };

// //     return res.json(users[userIndex]);
// // });

// // // Delete user by ID
// // app.delete("/api/users/:id", (req, res) => {
// //     const id = Number(req.params.id);

// //     const userIndex = users.findIndex(user => user.id === id);

// //     if (userIndex === -1) {
// //         return res.status(404).json({ error: "User not found" });
// //     }

// //     const deletedUser = users.splice(userIndex, 1)[0];

// //     return res.json({ message: "User deleted", user: deletedUser });
// // });

// // app.listen(port, () => {
// //     console.log(`Server Started at PORT: ${port}`);
// // });


// <!----------------------------------------------||====|> Express Middleware <|====||<-----------------------------------------------||-->

// // app.use((req, res, next) => {

// // })

// app.use(express.json()); // Built-in Middleware to parse JSON request bodies
// //It is middleware that tells Express how to automatically parse incoming JSON data in the request body.

// // Custom Middleware to log request details

// <!----------------------------------------------||====|> Express DeepDive <|====||<-----------------------------------------------||-->

// const express = require("express");
// const bodyparser = require("body-parser");
// const app = express();

// app.use("/", (req, res, next) => {
//     console.log("First Dummy Middleware", req.url, req.method);
//     next();
// })

// app.use((req, res, next) => {
//     console.log("Second Dummy Middleware", req.url, req.method);
//     next();
// });


// // app.use((req, res, next) => {
// //     console.log("Third Middleware", req.url, req.method);
// //     res.send("<h1>I Received The Response</h1>")
// // });
// // // Because of this after code will not execute.

// app.get("/", (req, res, next) => {
//     console.log("Handling / for Get", req.url, req.method);
//     res.send(`<h1>I Received The Response</h1>`)
// })


// // app.get("/contact-us", (req, res, next) => {
// //     console.log("Handling /contact-us for Get", req.url, req.method);
// //     res.send(`<h1>Please Provide Your Details Here.......</h1>`)
// // })

// app.get("/contact-us", (req, res, next) => {
//     console.log("Handling /contact-us for Get", req.url, req.method);
//     res.send(
//         `<!DOCTYPE html>
// <html>
// <head>
//     <title>Document</title>
//     <style>
//         * {
//             margin: 0;
//             padding: 0;
//             border: none;
//             font-family: sans-serif;
//         }
//              * a{
//     font-size:2rem;
//     }

//         body {
//             width: 100%;
//             height: 80vh;
//             display: flex;
//             flex-direction:column;
//             justify-content: center;
//             align-items: center;
//             gap:20px;
//         }

//         form {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             gap: 25px;
//         }

//         label {
//             font-size: 2rem;
//         }

//         .flex {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             gap: 25px;
//         }

//         input {
//             padding: 1rem;
//             border-radius: 1rem;
//             border: 1px solid grey;
//             font-size: 1rem;
//         }
//     </style>
// </head>

// <body>
// <h1>Please Provide Your Details Here.......</h1>
//     <form action="/contact-us" method="POST">
//         <div class="flex">
//             <input type="text" name="fullname" placeholder="First Name" required>
//             <input type="email" name="email" placeholder="Enter Your email" required>
//             <input class="btn" type="submit" value="Submit">
//         </div>
//         <a href="/" alt="link">Back to Homepage</a>
//     </form>
// </body>
// </html>`)
// });

// app.post("/contact-us", (req, res, next) => {
//     console.log("First Handling /contact-us for POST", req.url, req.method, req.body);
//     next();
// })

// app.use(bodyparser.urlencoded()); // Body Prasing

// app.post("/contact-us", (req, res, next) => {
//     console.log("Handling /contact-us for POST", req.url, req.method, req.body);
//     res.send(`<h1>Thank You For Your Details</h1>`)
// })

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on address  http://localhost:${PORT}`);
// })

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());                // ✅ Enables CORS for all origins
app.use(express.json());       // ✅ Parses incoming JSON
app.get('/', (req, res) => {
    res.send("<h1> Welcome </h1>");
});


app.post('/firealert', (req, res) => {
    console.log('🔥 FireBounce alert received:');
    console.log(req.body);     // ✅ Logs the payload
    res.json({ status: 'ok', received: req.body }); // ✅ Sends back confirmation
});

app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000/firealert');
});

