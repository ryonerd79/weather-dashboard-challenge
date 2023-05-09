var WeatherKy = "81579ebbf941cb5a0a56ea078ca19e47"
var searchButton = document.querySelector("#search-button");
var weatherInput =  document.querySelector("#input");
const cityWeather = document.querySelector('.city-weather')

searchButton.addEventListener("click", function() {
    var city = weatherInput.value
    var url = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=" + WeatherKy;
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var cityName = data.city.name
      console.log(cityWeather)//Loop over the data to generate a table, each table row will have a link to the repo url
     cityWeather.innerHTML = `
     <h1>${cityName}</h1>
     ` 
    });
});