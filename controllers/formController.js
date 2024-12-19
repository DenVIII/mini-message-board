import { insertMessage } from "../db/queries.js";

// @desc Create new post
// @route POST /new

export async function createMessage(req, res, next) {
  const newMessage = {
    text: req.body.message,
    username: req.body.user,
  };
  if (!newMessage.text || !newMessage.username) {
    res.status(400).redirect("/");
    console.log(new Error("All fields must be filled"));
    return;
  }

  await insertMessage(newMessage);
  res.status(201).redirect("/");
}
