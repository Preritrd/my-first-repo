const Home = require("../Models/Modalhome");

// Render Add Home Form
exports.getAddHome = (req, res, next) => {
  res.render('host/edithome', {
    PageTitle: "Add Home to Airbnb",
    CurrentPage: "addhome",
    editing: false,
    home: null
  });
};

// Render Edit Home Form
exports.getEditHome = async (req, res, next) => {
  console.log("✅ Reached getEditHome route");
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';

  try {
    const [rows] = await  Home.findById(homeId);
    const home = rows[0];

    if (!home) {
      console.log('🏠 Home not found');
      return res.redirect("/host/hosthomelist");
    }

    res.render('host/edithome', {
      PageTitle: "Edit Home",
      CurrentPage: "edithome",
      editing: editing,
      home: home
    });
  } catch (err) {
    console.error("❌ Error fetching home by ID:", err);
    res.status(500).send('Server error');
  }
};

// Handle POST to add new home
exports.postAddHome = async (req, res) => {
  const { housename, price, location, rating, photoUrl, description } = req.body;
  const home = new Home(housename, price, location, rating, photoUrl, description);
  await home.save();
  console.log("Home Saved Successfully.");
  res.redirect("/host/hosthomelist");
};

exports.postEditHome = async (req, res) => {
  const homeId = req.params.homeId; // URL param
  const { housename, price, location, rating, photoUrl, description } = req.body;

  const home = new Home(housename, price, location, rating, photoUrl, description, homeId); // Pass id to constructor
  await home.save();

  res.redirect("/host/hosthomelist");
};


// Render Host Home List
exports.getHostHomeList = async (req, res) => {
  try {
    const registerhomes = await Home.fetchAll();
    res.render('host/hosthomelist', {
      registerhomes,
      PageTitle: "Host Home List",
      CurrentPage: "hosthomelist"
    });
  } catch (error) {
    console.error('Error fetching homes:', error);
    res.status(500).send('Server error');
  }
};

// Delete home by ID
exports.postDeleteHome = async (req, res) => {
  const homeId = req.params.homeId;
  console.log("Deleting Home ID:", homeId);

  try {
    await Home.deleteByID(homeId);
    res.redirect("/host/hosthomelist");
  } catch (error) {
    console.error("Error deleting home:", error);
    res.status(500).send("Internal Server Error");
  }
};
