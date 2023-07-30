const express = require("express");
const { route } = require("express/lib/application")
const auth = require("../Middleware/auth");
const Soil = require("../models/Soil")
const Distributor = require("../models/Distributors");

const router = express.Router();

// router.get("/", (req,res) => {
//     // res.send("Ineuron Project Started (ROOT)")
//     res.render("home")
// })

router.get("/", auth.user, async (req, res) => {
    try {
      const soils = await Soil.find();
      res.render("User Panel/home", { 
        soils,
        user: req.rootuser
      });
    }catch (error) {
      res.status(500).send("Error fetching Soil data from the database.");
    }
});

router.get("/soil/:id",auth.user, (req,res) => {
    const id = req.params.id;

    Soil.findOne({ _id : id })
      .then(soilData => {
        if (!soilData) {
          return res.status(404).render('error', { error: 'Soil not found' });
        }
        res.render('User Panel/Soil', {
            user: req.rootuser,
            soil: soilData 
        });
      })
      .catch(err => {
        res.status(500).render('error', { error: 'Failed to retrieve soil data' });
      });

})

router.get("/login", (req,res) => {
    res.render("Registration/login")
})

router.get("/register", (req,res) => {
    res.render("Registration/register")
})

router.get("/profile", auth.user, (req,res) => {
    res.render("User Panel/profile.hbs",{
        user: req.rootuser
    })
})

router.get("/about", auth.user, (req,res) => {
    res.render("User Panel/about", {
      user: req.rootuser
    })
})

router.get("/distributors", auth.user, async(req,res) => {
  try {
    const distributors = await Distributor.find();
    res.render("User Panel/distributors", { 
      distributors,
      user: req.rootuser 
    });
  } catch (error) {
    res.status(500).send("Error fetching Soil data from the database.");
  }
})

router.get("/distributors/:id", auth.user, (req,res) => {
  const id = req.params.id;

  Distributor.findOne({ _id: id })
    .then(distributorData => {
      if (!distributorData) {
        return res.status(404).render('error', { error: 'Soil not found' });
      }
      res.render("User Panel/distributors_details", {
          user: req.rootuser,
          distributor: distributorData 
      });
    })
    .catch(err => {
      res.status(500).render('error', { error: 'Failed to retrieve soil data' });
    });
})

module.exports = router