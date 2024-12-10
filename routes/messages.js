import express from "express";
import { getMessageById } from "../controllers/messageController.js";

const router = express.Router();

// Get single message by id

router.get("/:id", getMessageById);

export default router;
