const apiKey = "3ed7b02af34a8cb9f8137a14d6d503d4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {  
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
if (response.status == 404){
  document.querySelector(".error").style.display = "block";
  document.querySelector(".city").innerHTML = "--";
  document.querySelector(".temp").innerHTML = "--" + "°C";
  document.querySelector(".like").innerHTML = "--" + "°C";
  document.querySelector(".humidity").innerHTML = "--" + "%";
  document.querySelector(".wind").innerHTML = "--" + "km/h";
}else{
   document.querySelector(".error").style.display = "none";
}
var data = await response.json()
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML =
  Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML =
  data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
document.querySelector(".like").innerHTML = Math.round(data.main.feels_like) + "°C"; 

if (data.weather[0].main == "Mist") {
  document.querySelector(".weather-icon").src = "images/mist.png";
} else if (data.weather[0].main == "Humidity") {
  document.querySelector(".weather-icon").src = "images/humidity.png";
 } else if (data.weather[0].main == "Clouds") {
  document.querySelector(".weather-icon").src = "images/clouds.png";
} else if (data.weather[0].main == "Clear") {
  document.querySelector(".weather-icon").src = "images/clear.png";
} else if (data.weather[0].main == "Drizzle") {
  document.querySelector(".weather-icon").src = "images/drizzle.png";
} else if (data.weather[0].main == "Wind") {
  document.querySelector(".weather-icon").src = "images/wind.png";
} else if (data.weather[0].main == "Snow") {
  document.querySelector(".weather-icon").src = "images/snow.png";
} else if (data.weather[0].main == "Rain") {
  document.querySelector(".weather-icon").src = "images/rain.png";
}
        
}
searchBtn.addEventListener("click", () => {
 checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
if (event.key === "Enter") {
  checkWeather(searchBox.value);
 }
});
window.addEventListener("load", () => checkWeather("Ahmedabad"));