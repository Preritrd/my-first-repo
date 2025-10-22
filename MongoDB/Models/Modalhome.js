
const { getDB } = require("../utils/databaseutil");
const { mongoConnect } = require("../utils/databaseutil");

module.exports = class Home {
    constructor(homeName, price, location, rating, photoUrl, description, _Id) {
        this.homeName = homeName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
        this.description = description;
        if (_Id) {
            this._Id = _Id;
        }
    }

    async save() {
        const db = getDB();
        return db.collection("homes").insertOne(this);
    }


    static fetchAll() {
        const db = getDB();
        return db.collection("homes").find().toArray();
    }

    static async findById(homeId) {
        console.log(homeId);
        const db = getDB();
        return db.collection("homes").find({ _id: homeId }).next();
    }
    static async deleteById(homeId) {
        return db.execute("DELETE FROM home WHERE Id=?", [homeId]);
    }
};