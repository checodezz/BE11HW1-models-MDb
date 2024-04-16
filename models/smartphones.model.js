const mongoose = require("mongoose");

const smartphoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    operatingSystem: {
      type: String,
      enum: ["iOS", "Android", "Windows", "Other"],
      required: true,
    },
    displaySize: {
      type: String,
      required: true,
    },
    storage: {
      type: String,
      required: true,
    },
    ram: {
      type: String,
      required: true,
    },
    cameraSpecs: {
      megaPixel: {
        type: Number,
        required: true,
      },
      lenstype: {
        type: String,
        required: true,
      },
      otherFeatures: {
        type: [String],
        required: true,
      },
    },
    batteryCapacity: {
      type: String,
      required: true,
    },
    connectivity: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
    },
    availableColors: {
      type: [String],
      enum: ["red", "white", "blue"],
    },
    features: {
      type: [String],
    },
  },
  { timestamps: true },
);

const Smartphone = mongoose.model("Smartphone", smartphoneSchema);
module.exports = Smartphone;
