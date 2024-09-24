const mongoose = require("mongoose")

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
  {
    // Define the name field with type String, required, and trimmed
    name: {
      type: String,
      required: true,
      trim: true,
    },
    
    // Define the email field with type String, required, and trimmed
    email: {
      type: String,
      required: true,
      trim: true,
    },

    // Define the password field with type String and required
    password: {
      type: String,
      required: true,
    },
    // Define the role field with type String and enum values of "Admin", "Student", or "Visitor"
    role: {
      type: String,
      enum: ["Admin", "Student"],
      required: true,
    },
    dataentry: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo",
      },
    ]
}
);
module.exports = mongoose.model("user", userSchema);