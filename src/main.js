import express from "express";
import morgan from "morgan";
import path from "path";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// route
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
    user: "Khoi",
  });
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
