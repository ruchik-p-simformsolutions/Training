const weatherform = document.querySelector("form");
const search = document.querySelector("input");
const msg1=document.querySelector("#msg1");

const msg2=document.querySelector("#msg2");

weatherform.addEventListener("submit", (e) => {
  e.preventDefault();

  const address=search.value;

  msg1.textContent="";
  msg2.textContent="";

  fetch("/search?address="+address).then((response) => {
    response.json().then((data) => {
      if (data.error) msg2.textContent=data.error;
      else {
        msg1.textContent="location is "+data.location+" and temperature is "+data.temperature;
        // console.log(data.location);
        // console.log(data.temperature);
      }
    });
  });
});
