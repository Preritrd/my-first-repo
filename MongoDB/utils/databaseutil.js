const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const mongoURL = "mongodb+srv://Cloud5:Cloud%405@cloud5.c67vpvp.mongodb.net/CloudDB?retryWrites=true&w=majority&appName=Cloud5";

let _db;

const mongoConnect = async () => {
    try {
        const client = await MongoClient.connect(mongoURL);
        console.log("MongoDB connected");
        _db = client.db("CloudDB");
    } catch (err) {
        console.error("Error connecting to Mongo:", err);
        throw err;
    }
};

const getDB = () => {
    if (!_db) {
        throw new Error("MongoDB not Connected");
    }
    return _db;
}


exports.mongoConnect = mongoConnect;
exports.getDB = getDB;