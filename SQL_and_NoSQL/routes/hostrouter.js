const express = require("express");
const hostrouter = express.Router();
const hostController = require("../controllers/hostController");

hostrouter.get("/add-home", hostController.getAddHome);
hostrouter.post("/add-home", hostController.postAddHome);

hostrouter.get("/hosthomelist", hostController.getHostHomeList);

hostrouter.get('/edithome/:homeId', hostController.getEditHome);
hostrouter.post("/edithome/:homeId", hostController.postEditHome);
hostrouter.post("/delete-home/:homeId", hostController.postDeleteHome);

module.exports = hostrouter;
