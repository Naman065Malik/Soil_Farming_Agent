const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const UserSchema = new mongoose.Schema({
    name: { type: String},
    userID: {type: String, unique:true},
    email: { type: String, unique: false},
    password: { type: String },
    age: {type: String, default: "18"},
    type: {type: String, default: "user"},
    token: {type: String},
    profilePhoto: { type: String, default: "static/images/img/user.png" },
},{timestamps: true});

module.exports = mongoose.model("user", UserSchema)