import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

export default new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});
