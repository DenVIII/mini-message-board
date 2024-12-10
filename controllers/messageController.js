import messages from "../db.js";

// @desc Render all messages
// @route GET /messages/:id

export function getMessageById(req, res, next) {
  const id = parseInt(req.params.id);
  const message = messages.find((message) => message.id === id);

  if (!message) {
    const error = `Message with id:${id} Not Found`;
    console.log(new Error(error));
    res.status(404).send(error);
  }

  res.status(200).render("messages/messagePage", { message });
}
