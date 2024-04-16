const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  identityNumber: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
