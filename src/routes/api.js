const express = require("express");
const router = express.Router();
const multer = require('multer');
const { route, path } = require("express/lib/application");
const User = require("../models/User");
const Soil = require("../models/Soil");
const Distributor = require("../models/Distributors");
const jwt = require("jsonwebtoken");
const auth = require("../Middleware/auth");
const upload = require("../Middleware/FileStorage");
const Distributors = require("../models/Distributors");

const SecretKey = "fregfisvgskhvskjvgsfhvjgslfgwskhskfvkjvbd";

router.post("/register", async (req,res) => {
    let response = {}
    if(!(req.body.name && req.body.userID && req.body.email && req.body.password)){
        response = {"message": "Please Enter details in all fields"}
    }
 
    else{
        const newtoken = jwt.sign(
            {userID: req.body.userID,type: "user"},
            SecretKey,
            {expiresIn: "4h"},
        )

        let password = req.body.password;
        const user = await User.create({
            name: req.body.name,
            userID: req.body.userID,
            email: req.body.email,
            password: password,
            token: newtoken
        }).then(() =>{
            response = {"message": "You have successfully Registered","redirect": "/"}
        }).catch((err) =>{
            response = {"message": "Please Enter a Different UserID. It is already Taken"}
        })

        res.cookie("jwt", newtoken, {
            expiresIn: new Date(Date.now() + 25892000000),
            httpOnly: true
        });
    }   
    res.json(response)
})

router.post("/login", async (req,res) => {
    let response = {}
    if(!(req.body.userID &&req.body.password)){
        response = {"message": "Please Enter details in all fields"}
    }

    const user = await User.findOne({userID:req.body.userID})

    if(!user){
        response = {"message": "User not found"}
        console.log("User not found");
    }
    else if(req.body.password != user.password){
        response = {"message": "Your Password is Wrong"}
    }else{
        const newtoken = jwt.sign(
            {userID: user.userID,type: user.type},
            SecretKey,
            {expiresIn: "4h"}, 
        )
        user.token = newtoken;
        user.save().catch((err) =>{
            response = {"message": "Internally Token not Saved"};
        })
        if(user.type == "admin"){
            response = {
                "message": "You have sussessfully loged In!",
                "redirect": "/admin/admin_distributors/"           
            }
        }else if(user.type == "user"){
            response = {
                "message": "You have sussessfully loged In!",
                "redirect": "/"           
            }
        }
        res.cookie("jwt", newtoken, {
            expiresIn: new Date(Date.now() + 25892000000),
            httpOnly: true
        });
    }


    res.json(response)
})

router.post("/profile",auth.user, upload.Profile.single('profilePhoto'), async (req,res) => {
    let response;

    if(!req.body.name || !req.body.email || !req.body.password || !req.body.age){
        response = {"message": "Please Fill all The Fields to Update Your Profile"};
    }

    else{
        try{        
            const user = await User.findOne({_id: req.rootuser._id});
            let filepath = req.file.path;
            filepath = filepath.replace("public", "static");

            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.age = req.body.age;
            user.profilePhoto = filepath;

            user.save().catch((err) =>{
                response = {"message": "Internally Token not Saved"};
            });

            res.redirect("back");

        } catch(err){
            res.status(401).send("Internal Server Error");
            console.log(err);
        }
    }
    res.json(response)
})

router.post("/soil", auth.admin , upload.Soil.single('soil'), async (req,res) => {

    if(!req.body.name || !req.body.description || !req.body.places || !req.body.cropes || !req.body.nature ){
        res.json({
            "message": "Please Fill All Required Fields"
        })
    }
    else{
        try{
            let filepath = req.file.path;
            filepath = filepath.replace("public", "static");

            const soil = await Soil.create({
                name: req.body.name,
                description: req.body.description,
                places: req.body.places,
                cropes: req.body.cropes,
                nature: req.body.nature,
                image: filepath
            })

            res.redirect("/admin/admin_soil")
        }
        catch(err){
            res.status(401).send("Internal Server Error");
            console.log(err);
        }
    }
})

router.post("/distributor", auth.admin, upload.Distributor.single('Distributor'), async (req,res) => {

    if(!req.body.name || !req.body.description || !req.body.address || !req.body.soils || !req.body.range ){
        res.json({
            "message": "Please Fill All Required Fields"
        })
    }
    else{
        try{
            let filepath = req.file.path;
            filepath = filepath.replace("public", "static");

            const distributor = await Distributor.create({
                name: req.body.name,
                description: req.body.description,
                address: req.body.address,
                soils: req.body.soils,
                range: req.body.range,
                image: filepath
            })

            res.redirect("/admin/admin_distributors")
        }
        catch(err){
            res.status(401).send("Internal Server Error");
            console.log(err);
        }
    }
})

module.exports = router