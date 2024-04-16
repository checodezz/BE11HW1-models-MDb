const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  avgRatings: {
    type: Number,
    required: true,
  },
  totalRatings: {
    type: Number,
    required: true,
  },
  totalReviews: {
    type: Number,
    required: true,
  },
  remainingQty: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productImageUrl: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
