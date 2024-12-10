import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import form from "./routes/form.js";
import messages from "./db.js";

const app = express();
const PORT = 8081;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
});

app.use("/new", form);

app.listen(PORT, () => console.log(`Server is running at: localhost:${PORT}`));
