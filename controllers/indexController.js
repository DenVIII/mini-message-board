import { getAllMessagesInTable } from "../db/queries.js";

// @desc Render all messages
// @route GET /

export async function getAllMessages(req, res, next) {
  const messages = await getAllMessagesInTable();
  res.render("index", { title: "Mini Message Board", messages });
}

// @desc Render form
// @route GET /new

export function getForm(req, res, next) {
  res.render("form", { title: "New Message Form" });
}
