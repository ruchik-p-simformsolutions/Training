const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=c0e873690f90f9b02e825614197efe43&query=18.9986,72.8174?&units=f";
request({ url: url, json: true }, (error, response) => {
  //
  if (error) console.log("not connected to internet");
  else if (response.body.error) console.log("not able to locate");
  else console.log(response.body.current["temperature"]);
});

const url2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoiYWJjNDA3NDU1IiwiYSI6ImNrbDZjczYweDI3bjEydWxiMGEzcHpuZzUifQ.NsrFrr2E5jFfE_4rLUv_ZQ&limit=1";
request({ url: url2, json: true }, (error, response) => {
  if (error) console.log("not connected to internet");
  else if (response.body.features.length === 0)
    console.log("not able to find latitude and longitude");
  else console.log(response.body.features[0].center);
});
