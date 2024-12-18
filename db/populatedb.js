import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Client } = pkg;

const SQL = `
CREATE TABLE IF NOT EXISTS messages ( 
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT,
    username VARCHAR ( 255 ),
    added TIMESTAMP WITH TIME ZONE);

INSERT INTO messages (text, username, added) 
VALUES
    ('Herp Derp', 'Bryan', NOW()),
    ('Zdravstvyi Mir', 'Odin', NOW()),
    ('Hello World!', 'Damon', NOW());

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.POSTGRES_CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
