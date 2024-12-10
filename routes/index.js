import express from "express";
import { getAllMessages, getForm } from "../controllers/indexController.js";

const router = express.Router();

router.get("/", getAllMessages);

router.get("/new", getForm);

export default router;
