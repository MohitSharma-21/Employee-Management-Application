const { Schema, model } = require("mongoose");

const employeeSchema = new Schema(
  {
    employeeFirstName: {
      type: String,
    },
    employeeLastName: {
      type: String,
    },
    employeeID: {
      type: String,
    },
    emailID: {
      type: String,
      // unique: true,
    },

    contactNumber: {
      type: String,
      // unique: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Employee", employeeSchema);
