
// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }
// // module.exports = add; // This Make the add function accessable,
// // in any file [In Short : It acts as Public].
// // It is just one function


// // Creation of Multi-functions : ==>{

// module.exports = {
//     addfn: add,
//     subfn: sub,
// };

// //}

// exports.add = (a, b) => a + b; // OUTPUT => The Value is :  { add: [Function (anonymous)], sub: [Function (anonymous)] }
// exports.sub = (a, b) => a - b;

// export const a = 1; // named export
// export const b = 2; //   "     "
// export const c = 3  //   "     "
// export const d = 4; //   "     "
// export const e = 5; //   "     "

// let obj;
// export default obj = {
//     x: 5,
//     y: 7
// }


// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Server is running!');
// });

// // Start the server
// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });

// // Shut down the server after 10 seconds
// setTimeout(() => {
//     server.close(() => {
//         console.log('Server has been shut down.');
//     });
// }, 5000); // 10 seconds


// <!-----------------||====|> Building REST API's using Node and EXpress.js <|====||<---------------------||-->

const sumRequestHandler = (req, res) => {
    console.log("In Sum", req.url);

    const body = [];
    req.on("data", (chunk) => {
        body.push(chunk);
    });

    req.on("end", () => {
        const bodyStr = Buffer.concat(body).toString();
        console.log("Full Body:", bodyStr);

        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);

        const result = Number(bodyObj.num1) + Number(bodyObj.num2);
        console.log("Result:", result);

        // ✅ Send proper headers only once
        res.writeHead(200, { "Content-Type": "text/html" });

        // ✅ Write HTML response
        res.write(`
            <head>
                <title>Practice Test</title>
                <style>
                 * a{
    font-size:2rem;
    }
                    body{
                        height:80vh;
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                        gap:30px;
                    }
                </style>
            </head>
            <body>
                <h1>The Sum Of These Numbers Is : ${result}</h1>
                <a href="/" alt="link">Back to Homepage</a>
                <!-- <a href="/calculate" alt="link">Back to Calculator</a> -->
                <a href="/calculator" alt="link">Back to Calculator</a> 
            </body>
        `);

        return res.end();
    });
};

exports.sumRequestHandler = sumRequestHandler;
