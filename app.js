import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import formRouter from "./routes/form.js";
import indexRouter from "./routes/index.js";
import messagesRouter from "./routes/messages.js";

const app = express();
const PORT = 8081;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", formRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => console.log(`Server is running at: localhost:${PORT}`));
