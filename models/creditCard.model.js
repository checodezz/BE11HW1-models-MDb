const mongoose = require("mongoose");

const creditCardSchema = new mongoose.Schema({
  cardNumber: {
    type: Number,
    required: true,
  },
  validity: {
    type: Date,
    required: true,
  },
  cardHolderName: {
    type: String,
    required: true,
  },
});

const CreditCard = mongoose.model("CreditCard", creditCardSchema);

module.exports = CreditCard;
