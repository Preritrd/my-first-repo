const express = require("express");
const storerouter = express.Router();
const storeController = require("../controllers/storeController");

storerouter.get("/", storeController.getIndex);
storerouter.get("/home", storeController.getHomes);
storerouter.get("/bookings", storeController.getBookings);
storerouter.get("/favouritelist", storeController.getfavouritelist);
storerouter.post("/favouritelist", storeController.postAddToFavouritelist);
storerouter.get("/home/:homeId", storeController.getHomeDetails);
storerouter.get("/home/Book/:homeId", storeController.getBookHome);
storerouter.post("/deletefavourite/:homeId", storeController.postRemoveFromFavouritelist);
module.exports = storerouter;

