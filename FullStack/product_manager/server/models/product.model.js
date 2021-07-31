const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: String,
	age: Number,
	descreption: String
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;