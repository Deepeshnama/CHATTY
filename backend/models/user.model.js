import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
    },
    fullName: {
      type: String,
      required: true, // Full name is required
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum length of 6 characters
    },
    profilePic: {
      type: String,
      default: "", // Default profile picture is an empty string
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Create the User model

const User = mongoose.model("User", userSchema);

export default User;
