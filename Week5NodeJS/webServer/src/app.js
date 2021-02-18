const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

//define paths
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebars
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
//setup static dir
app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  //
  res.render("index", {
    title: "Welcome to Weather App",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About us",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
  });
});

app.get("*",(req,res)=>{
  res.render("404", {
    title: "404",
  });
})

app.listen(3000, () => {
  console.log("server is running...");
});
