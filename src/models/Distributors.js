const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const DistributorSchema = new mongoose.Schema({
    name: { type: String},
    description: {type: String},
    address: { type: String},
    soils: { type: String },
    range: {type: String},
    image: { type: String, required: true },
},{timestamps: true});

module.exports = mongoose.model("Distributor", DistributorSchema)