const request = require("request");
const geocode = require("./geocode");
const forecast = require("./forecast");

const location = process.argv[2];

if (!location) console.log("enter location...");
else {
  geocode.geolocation(location, (error, {latitude,longitude}={}) => {
    if (error) return console.log(error);
    forecast.weather(latitude, longitude, (error, {temperature,location}={}) => {
      if (error) return console.log(error);
      console.log(location);
      console.log(temperature);
    });
  });
}
