const fs = require("fs").promises;
const path = require("path");

module.exports = class Favourite {

    static async addtofavourite(id, callback) {

    }

    static async getfavourites(id, callback) {
        const favouritedatapath = path.join(__dirname, "..", "data", "database.json");
        try {
            const data = await fs.readFile(favouritedatapath, "utf-8");
            return JSON.parse(data || "[]"); // Handles empty file safely
        } catch (err) {
            return []; // Handles missing or invalid file
        }
    }

    static async deleteByID(homeId) {
        const homes = await Favourite.getfavourites();
        const updatedHomes = homes.filter(home => home.id.toString() !== homeId.toString());
        const homedatapath = path.join(__dirname, "..", "data", "database.json");
        try {
            await fs.writeFile(homedatapath, JSON.stringify(updatedHomes, null, 2));
            console.log("Home deleted successfully!");
        } catch (error) {
            console.error("Error writing file:", error);
        }
    }

};

