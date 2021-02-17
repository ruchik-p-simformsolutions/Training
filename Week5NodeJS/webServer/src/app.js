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
    title: "Index file",
    author: "Bob",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About US",
    author: "Bob",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    author: "Bob",
  });
});

app.get("*",(req,res)=>{
    res.send("404");
})

app.listen(3000, () => {
  console.log("server is running...");
});
