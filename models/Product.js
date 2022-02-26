const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
