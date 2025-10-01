const fs = require("fs").promises;
const path = require("path");

module.exports = class Home {
    constructor(housename, price, location, rating, photoUrl) {
        this.housename = housename;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    async save() {
        // Assign a simple unique ID
        // this.id = Math.random().toString(36).substr(2, 9);
        const homedatapath = path.join(__dirname, "..", "data", "database.json");

        // Ensure data folder exists
        await fs.mkdir(path.dirname(homedatapath), { recursive: true });

        // Fetch existing homes
        let registerhomes = await Home.fetchAll();

        if (this.id) { // edit home case
            registerhomes = registerhomes.map(home => {
                if (home.id === this.id) {
                    return this;
                }
                return home;
            })
        } else {// add home case
            this.id = Math.random().toString(36).substr(2, 8); // 8-character alphanumeric string
            // Add new home
            registerhomes.push(this);
        }


        try {
            // Write updated array to file
            await fs.writeFile(homedatapath, JSON.stringify(registerhomes, null, 2));
            console.log("Home saved successfully!");
        } catch (error) {
            console.error("Error writing file:", error);
        }
    }

    static async fetchAll() {
        const homedatapath = path.join(__dirname, "..", "data", "database.json");
        try {
            const data = await fs.readFile(homedatapath, "utf-8");
            return JSON.parse(data || "[]"); // Handles empty file safely
        } catch (err) {
            return []; // Handles missing or invalid file
        }
    }

    static async findByID(homeId) {
        const homes = await this.fetchAll();
        const homefound = homes.find(home => home.id.toString() === homeId.toString());
        return homefound;
    }
    static async deleteByID(homeId) {
        const homes = await this.fetchAll();
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
