import messages from "../db.js";

// @desc Create new post
// @route POST /new

export function createMessage(req, res, next) {
  const newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  };

  if (!newMessage.text || !newMessage.user) {
    res.status(400).redirect("/");
    console.log(new Error("All fields must be filled"));
    return;
  }

  messages.push(newMessage);
  res.status(201).redirect("/");
}
