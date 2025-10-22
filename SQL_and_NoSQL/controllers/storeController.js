const Home = require("../Models/Modalhome");

exports.getIndex = async (req, res, next) => {
    exports.getIndex = async (req, res, next) => {
        try {
            const [registerhomes] = await Home.fetchAll();
            res.render("store/index", {
                registerhomes: registerhomes,
                PageTitle: "Airbnb Home",
                CurrentPage: "index",
            });
        } catch (error) {
            console.error("Error fetching homes:", error);
            next(error);
        }
    };
};

exports.getHomes = async (req, res, next) => {
    try {
        const registerhomes = await Home.fetchAll();
        res.render("store/homelist", {
            registerhomes: registerhomes,
            PageTitle: "Homes-List",
            CurrentPage: "home",
        });
    } catch (error) {
        console.error("Error fetching homes:", error);
        next(error);
    }
};

exports.getBookings = async (req, res, next) => {
    try {
        const registerhomes = await Home.fetchAll();
        res.render("store/bookings", {
            registerhomes: registerhomes,
            PageTitle: "My Bookings",
            CurrentPage: "Bookings",
        });
    } catch (error) {
        console.error("Error fetching homes:", error);
        next(error);
    }
};

exports.getfavouritelist = async (req, res, next) => {
    try {
        const registerhomes = await Home.fetchAll();
        res.render("store/favouritelist", {
            registerhomes,
            PageTitle: "My Favouritelist",
            CurrentPage: "favouritelist",
        });
    } catch (error) {
        console.error("Error fetching homes:", error);
        next(error);
    }
};

exports.postAddToFavouritelist = (req, res, next) => {
    console.log("Came to Add to Favourite", req.body)
    res.redirect("/favouritelist");
}


exports.getHomeDetails = async (req, res, next) => {
    const homeId = req.params.homeId;
    console.log("Requested Home ID:", homeId);

    try {
        const [home] = await Home.findByID(homeId);

        if (!home) {
            console.log("Error: Home Not Found");
            return res.redirect("/home");
        }

        res.render("store/homedetail", {
            PageTitle: "Home Details",
            CurrentPage: "homedetails",
            home: home  // Pass home details to the template
        });

    } catch (error) {
        console.error("Error finding home:", error);
        next(error);
    }
};



exports.getBookHome = async (req, res, next) => {
    const homeId = req.params.homeId;
    console.log("Requested Home ID:", homeId);

    try {
        const home = await Home.findByID(homeId);

        if (!home) {
            console.log("Error: Home Not Found");
            return res.redirect("/home");
        }

        res.render("store/BookConfirmation", {
            PageTitle: "Booking Home",
            CurrentPage: "Book Home",
            home: home  // Pass home details to the template
        });

    } catch (error) {
        console.error("Error finding home:", error);
        next(error);
    }
};


exports.postRemoveFromFavouritelist = async (req, res, next) => {
    const homeId = req.params.homeId;
    console.log("Requested Home ID for Deletion:", homeId);

    try {
        await Home.deleteByID(homeId);
        res.redirect("/favouritelist");
    } catch (error) {
        console.error("Error deleting home:", error);
        next(error);
    }
};                                          