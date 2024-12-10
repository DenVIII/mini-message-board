import express from "express";
import { createMessage, getForm } from "../controllers/formController.js";

const router = express.Router();

router.post("/", createMessage);

export default router;
