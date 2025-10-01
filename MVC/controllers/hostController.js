const Home = require("../Models/Modalhome");

// Render Add Home Form
exports.getAddHome = (req, res, next) => {
  res.render('host/edithome', {
    PageTitle: "Add Home to Airbnb",
    CurrentPage: "addhome",
    editing: false
  });
};


exports.getEditHome = (req, res, next) => {
  console.log("✅ Reached getEditHome route");

  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';

  Home.findByID(homeId)
    .then(home => {
      if (!home) {
        console.log('Home not found');
        return res.redirect("/host/hosthomelist");
      }
      res.render('host/edithome', {
        PageTitle: "Edit Home",
        CurrentPage: "EditHome",
        editing: editing,
        home: home
      });
    })
    .catch(err => {
      console.error("❌ Error fetching home by ID:", err);
      res.status(500).send('Server error');
    });
};


// Handle POST request to add a new home
exports.postAddHome = async (req, res) => {
  const { housename, price, location, rating, photoUrl } = req.body;
  const home = new Home(housename, price, location, rating, photoUrl);
  await home.save();
  res.redirect("/home");
};

exports.postEditHome = async (req, res) => {
  const { id, housename, price, location, rating, photoUrl } = req.body;
  const home = new Home(housename, price, location, rating, photoUrl);
  home.id = id; // Retain the original ID
  await home.save();
  res.redirect("/hosthomelist");
};


// Render list of registered homes
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


exports.postDeleteHome = async (req, res) => {
  const homeId = req.params.homeid;
  console.log("Deleting Home ID:", homeId);
  try {
    await Home.deleteByID(homeId);  // ✅ Await the promise-based method
    res.redirect("/hosthomelist"); // ✅ Correct redirect path
  } catch (error) {
    console.error("Error deleting home:", error);
    res.status(500).send("Internal Server Error");
  }
};
