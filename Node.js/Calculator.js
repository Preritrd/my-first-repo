const http = require("http");
const { requestHandler } = require("./Calwebpages");

const server = http.createServer(requestHandler);

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
