var WeatherKy = "81579ebbf941cb5a0a56ea078ca19e47"
var searchButton = document.querySelector("#search-button");
var cityButton = document.querySelector("#city-button");
var weatherInput =  document.querySelector("#input");
const cityWeather = document.querySelector('.city-weather');
  var rightNow = dayjs().format('MMM DD, YYYY');
  $('#currentDay').text(rightNow);
 
  

searchButton.addEventListener("click", function() {
    var city = weatherInput.value
    var url = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=" + WeatherKy;
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var cityName = data.city.name;
      var weatherIcon = data.list[0].weather[0].icon;
      var temp = data.list[0].main.temp;
      var wind = data.list[0].wind.speed;
      var humidity = data.list[0].main.humidity;
     //Loop over the data to generate a table, each table row will have a link to the repo url
     cityWeather.innerHTML = `
     <h1>${cityName} (${rightNow})</h1>
     <img src="https://openweathermap.org/img/w/${weatherIcon}.png" height="40" width="40">
     <p>Temp: ${temp}</p>
     <p>Wind: ${wind}</p>
     <p>Humidity: ${humidity}</p>
     ` 
    });
});

  searchButton.addEventListener("click", function() {
  var city = cityWeather.value
  var url = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=" + WeatherKy;
  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var cityName = data.city.name;
    var weatherIcon = data.list[8].weather[8].icon;
    var temp = data.list[8].main.temp;
    var wind = data.list[8].wind.speed;
    var humidity = data.list[8].main.humidity;
   cityWeather.innerHTML = `
   <h1>${cityName} ${rightNow}</h1>
   <img src="https://openweathermap.org/img/w/${weatherIcon}.png" height="40" width="40">
   <p>Temp: ${temp}</p>
   <p>Wind: ${wind}</p>
   <p>Humidity: ${humidity}</p>
   ` 
  });
});