const path = require("path");
const express = require("express");
const hbs = require("hbs");
const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port=process.env.PORT||3000;

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

app.get("/search", (req, res) => {
  const location = req.query.address;
  if (!location) {
    return res.send({ error: "enter address" });
  }
  // console.log(req.query.address);
  geocode.geolocation(location, (error, { latitude, longitude } = {}) => {
    if (error) {
      return res.send({
        error: error,
      });
    }
    forecast.weather(
      latitude,
      longitude,
      (error, { temperature, location } = {}) => {
        if (error) {
          return res.send({
            error: error,
          });
        }
        res.send({
          location: location,
          temperature: temperature,
        });
      }
    );
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
  });
});

app.listen(port, () => {
  console.log("server is running on "+port);
});
