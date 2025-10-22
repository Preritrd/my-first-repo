
const db = require("../utils/databaseutil");

module.exports = class Home {
    constructor(homeName, price, location, rating, photoUrl, description, Id) {
        this.homeName = homeName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
        this.description = description;
        this.Id = Id;
    }

    async save() {
        if (this.Id) {
            return db.execute(
                'UPDATE home SET homeName = ?, price = ?, location = ?, rating = ?, photoUrl = ?, description = ? WHERE Id = ?',
                [this.homeName, this.price, this.location, this.rating, this.photoUrl, this.description, this.Id]
            );
        } else {
            return db.execute(
                'INSERT INTO home (homeName, price, location, rating, photoUrl, description) VALUES (?, ?, ?, ?, ?, ?)',
                [this.homeName, this.price, this.location, this.rating, this.photoUrl, this.description]
            );
        }
    }


    static fetchAll() {
        return db.execute("SELECT * FROM home");
    }

    static async findById(homeId) {
        return db.execute("SELECT * FROM home WHERE Id=?", [homeId]);
    }
    static async deleteById(homeId) {
        return db.execute("DELETE FROM home WHERE Id=?", [homeId]);
    }
};