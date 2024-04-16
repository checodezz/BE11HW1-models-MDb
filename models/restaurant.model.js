const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cuisine: {
      type: [String],
      enum: [
        "Italian",
        "Mexican",
        "Chinese",
        "Indian",
        "American",
        "French",
        "Japanese",
        "Meditarrenean",
        "Thai",
        "Vegetarian",
        "Vegan",
        "Other",
      ],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    openingYear: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    specialDishes: {
      type: [String],
    },
    photoUrls: {
      type: [String],
    },
  },
  { timestamps: true },
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
