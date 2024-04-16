const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true  
  }, 
  description : {
    type : String
  }, 
  priority : {
    type : String,
    enum : ["Low", "Medium", "High"]
  }, 
  dueDate : {
    type : Date
  },
  completed : {
    type: Boolean
  },
  tags : {
    type : [String]
  }
},{timestamps : true})