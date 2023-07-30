const express = require("express");
const router = express.Router();

const auth = require("../Middleware/auth");

const Soil = require("../models/Soil");
const Distributor = require("../models/Distributors");

router.get("/admin_distributors", auth.admin , (req,res) => {
    res.render("Admin Panel/admin_distributors.hbs", {
        user: req.rootuser
    })
})

router.get("/distributors_list", auth.admin , async (req,res) => {
    try{
        const distributors = await Distributor.find();
        res.render("Admin Panel/distributors_list.hbs", {
            distributors,
            user: req.rootuser
        })
    }catch{
        res.status(500).send("Error fetching Distributor data from the database.");   
    }
})

router.get("/distributors_list/:id", auth.admin , async (req,res) => {
    const id = req.params.id;
    try{
        const distributor = await Distributor.findOne({ _id: id });
        res.render("Admin Panel/distributor_details.hbs", {
            distributor,
            user: req.rootuser
        })
    }catch{
        res.status(500).send("Error fetching Distributor details from the database."); 
    }
})

router.get("/distributors_input", auth.admin , (req,res) => {
    res.render("Admin Panel/distributors_input.hbs", {
        user: req.rootuser
    })
})

router.get("/admin_soil", auth.admin , (req,res) => {
    res.render("Admin Panel/admin_soil.hbs", {
        user: req.rootuser
    })
})

router.get("/soils_list", auth.admin , async (req,res) => {
    try {
        const soils = await Soil.find();
        res.render("Admin Panel/soils_list.hbs", { 
            soils,
            user: req.rootuser 
        });
    }catch (error) {
        res.status(500).send("Error fetching Soil data from the database.");
    }
})

router.get("/soil_list/:id", auth.admin , async(req,res) => {
    const id = req.params.id;

    try {
        const soil = await Soil.findOne({ _id: id })
        .then()
        res.render("Admin Panel/soil_details.hbs", { 
            soil,
            user: req.rootuser
        });
    }catch (error) {
        res.status(500).send("Error fetching Soil data from the database.");
    }
})

router.get("/soil_input", auth.admin , async (req,res) => {
    res.render("Admin Panel/soil_input.hbs", {
        user: req.rootuser
    })
})

router.get("/admin_profile", auth.admin , (req,res) => {
    res.render("Admin Panel/admin_profile.hbs", {
        user: req.rootuser
    })
})

module.exports = router