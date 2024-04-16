const mongoose = require("mongoose");

const fruitsSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  }, 
  details : {
    type : String,
    required : true
  }, 
  calories : {
    type : Number,
    required : true
  }, 
  carbs : {
    type : Number,
    required : true
  }, 
  protien :{
    type : Number,
    required : true
  },
  fat : {
    type : Number,
    required : true
  }
})