//get reference of input box search
const searchbox=document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);
function setQuery(evt){
  if(evt.keyCode==13){
    getResults(searchbox.value);
  }
}
const apikey="27b0c275f873b6e8908cfb2aafa12a1b";
function getResults(query){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}&units=metric`)
  .then(weather=>{return weather.json();})
  .then(response=>{console.log(response);
    displayResults(response);
  });
}

function displayResults(weather){
  let city=document.querySelector('.location .city');
  city.innerText=`${weather.name}, ${weather.sys.country}`;
}


