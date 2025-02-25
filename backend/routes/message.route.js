import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

// Route to get users for the sidebar
router.get("/users", protectRoute, getUsersForSidebar);

// Route to get messages by user ID
router.get("/:id", protectRoute, getMessages);

// Route to send a message
router.post("/send/:id", protectRoute, sendMessage);

export default router;
