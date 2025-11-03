// api/index.js
import express from "express";
import { engine as hbsEngine } from "express-handlebars";
import serverless from "serverless-http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// serve static files
app.use(express.static(path.join(__dirname, "../public")));

// handlebars
app.engine("hbs", hbsEngine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));

// routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// no app.listen on Vercel
export default (req, res) => serverless(app)(req, res);
