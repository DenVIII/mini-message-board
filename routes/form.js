import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("form", { title: "New Message Form" });
});

export default router;