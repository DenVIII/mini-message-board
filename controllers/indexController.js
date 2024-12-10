import messages from "../db.js";

// @desc Render all messages
// @route GET /

export function getAllMessages(req, res, next) {
  res.render("index", { title: "Mini Message Board", messages });
}

// @desc Render form
// @route GET /new

export function getForm(req, res, next) {
  res.render("form", { title: "New Message Form" });
}
