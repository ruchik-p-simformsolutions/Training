const request = require("request");
const geolocation = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiYWJjNDA3NDU1IiwiYSI6ImNrbDZjczYweDI3bjEydWxiMGEzcHpuZzUifQ.NsrFrr2E5jFfE_4rLUv_ZQ&limit=1";
  request({ url, json: true }, (error, {body}) => {
    if (error) callback("not connected to internet", undefined);
    else if (body.features.length === 0)
      callback("not able to find latitude and longitude, enter correct address", undefined);
    else
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        place: body.features[0].place_name,
      });
  });
};

module.exports={
    geolocation:geolocation,
}