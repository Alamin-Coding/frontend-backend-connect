const mongoose = require("mongoose");
const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      unique: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: [true, "Gender is required"],
    },
    address: {
      house: {
        type: Number,
        required: [true, "House number is required"],
      },
      road: {
        type: Number,
        required: [true, "Road number is required"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
      },
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
    },
  },
  { timestamps: true },
);

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
