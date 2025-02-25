import express from "express";

import {
  checkAuth,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";

import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Route to sign up a new user
router.post("/signup", signup);

// Route to log in a user
router.post("/login", login);

// Route to log out a user
router.post("/logout", logout);

// Route to update user profile
router.put("/update-profile", protectRoute, updateProfile);

// Route to check if a user is authenticated
router.get("/check", protectRoute, checkAuth);

export default router;
