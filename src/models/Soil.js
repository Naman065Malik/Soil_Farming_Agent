const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const SoilSchema = new mongoose.Schema({
    name: { type: String},
    description: {type: String},
    places: { type: String},
    cropes: { type: String },
    nature: {type: String},
    image: { type: String, required: true },
},{timestamps: true});

module.exports = mongoose.model("Soil", SoilSchema)