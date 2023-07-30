const jwt = require("jsonwebtoken");
const User = require("../models/User");
const SecretKey = "fregfisvgskhvskjvgsfhvjgslfgwskhskfvkjvbd";

async function verifyToken(req,res,next){

    try{
        const token = req.cookies.jwt ;

        const verifyToken = jwt.verify(token,SecretKey);
        
        const rootuser = await User.findOne({userID: verifyToken.userID});

        if(!rootuser) {throw new Error("User not Found")}

        req.rootuser = rootuser;
        next();

    } catch(err){
        res.redirect("/login");
    }

}

async function verifyAdmin(req,res,next){

    try{
        const token = req.cookies.jwt ;

        const verifyToken = jwt.verify(token,SecretKey);
        
        const rootuser = await User.findOne({userID: verifyToken.userID});

        if(!rootuser) {throw new Error("User not Found")}

        req.rootuser = rootuser;
        if(rootuser.type == "admin"){
            next();
        }
        else{
            res.redirect("/login");
        }

    } catch(err){
        res.redirect("/login");
    }

}

module.exports = {
    user: verifyToken,
    admin: verifyAdmin
};