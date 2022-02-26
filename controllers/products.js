const Product = require("../models/Product.js");

const getProducts = (req, res) => {
  Product.find({})
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getProduct = (req, res) => {
  Product.findOne({ _id: req.params.productID })
    .then((result) => res.status(200).json(result))
    .catch(() => res.status(404).json({ msg: "Product not found" }));
};

const createProduct = (req, res) => {
  if (req.body.name.trim().length === 0) {
    return res.status(404).send({
      message: "user value is empty!",
    });
  }
  // const user = Product.findOne({ name: req.body.name });
  // if (user) {
  //   return res.status(409).send({ message: "username already exist" });
  // }
  Product.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ msg: error }));
};

const updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.productID }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(404).json({ msg: "Product not found" }));
};

const deleteProduct = (req, res) => {
  Product.findOneAndDelete({ _id: req.params.productID })
    .then((result) => console.log(result))
    .catch((error) => res.status(404).json({ msg: "Product not found" }));
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
