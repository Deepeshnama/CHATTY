import mongoose from "mongoose";

// Define the message schema
const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // Sender ID is required
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // Receiver ID is required
    },
    text: {
      type: String, // Message text
    },
    image: {
      type: String, // Image URL
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Create the Message model
const Message = mongoose.model("Message", messageSchema);

export default Message;
