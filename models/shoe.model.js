const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true
  }, 
  category : {
    type : String,
    required : true
  },
  info : {
    type :String,
     required : true
  },
  colors : [{
    type : String,
    enum : ["color1", "color2", "color3", 'color4'],
  }] ,
  size : [{
    type : Number,
    enum : [7,8,9,10,11]
  }], 
  price : {
    type : Number,
    required : true
  }, 
  productImageUrl : {
    type : String,
    required: true
  }
})

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe