const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const hbs = exphbs.create({
  extname: ".hbs",
  defaultLayout: "default",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  helpers: {
    LOGO_ROOT: "https://logohost/foo/bar/",
    HIBP_ROOT: "https://haveibeenpwned.com/api/v3/breaches"
  }
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = Number(process.env.PORT || 2000);
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
