import pool from "./pool.js";

export async function getAllMessagesInTable() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

export async function getMessageByIdFromTable(query) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [
    query,
  ]);
  return rows[0];
}

export async function insertMessage(message) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, NOW())",
    [message.text, message.username]
  );
}
