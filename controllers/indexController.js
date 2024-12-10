import messages from "../db.js";

// @desc Render form
// @route GET /new

export function getAllMessages(req, res, next) {
  res.render("index", { title: "Mini Message Board", messages });
}

export function getForm(req, res, next) {
  res.render("form", { title: "New Message Form" });
}
