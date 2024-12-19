import { getMessageByIdFromTable } from "../db/queries.js";
// @desc Render message by it's id
// @route GET /messages/:id

export async function getMessageById(req, res, next) {
  const id = parseInt(req.params.id);
  const message = await getMessageByIdFromTable(id);

  if (!message) {
    const error = `Message with id:${id} Not Found`;
    console.log(new Error(error));
    res.status(404).send(error);
  }

  res.status(200).render("messages/messagePage", { message });
}
