const request = require("request");
const weather=(latitude,longitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=c0e873690f90f9b02e825614197efe43&query="+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)+"?";
    request({url,json:true},(error,{body})=>{
        if (error) callback("not connected to internet", undefined);
        else if(body.error) callback("latitude or longitude incorrect",undefined);
        else callback(undefined,{
            temperature:body.current["temperature"]+" celcius",
            location:body.location["name"]+", "+body.location["region"]+", "+body.location["country"],
        });
    })
}
module.exports={
    weather:weather,
}