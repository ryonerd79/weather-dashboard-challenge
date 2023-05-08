var WeatherKy = "81579ebbf941cb5a0a56ea078ca19e47"
var searchButton = document.querySelector("#search-button");
var weatherInput =  document.querySelector("#input");


searchButton.addEventListener("click", function() {
    var city = weatherInput.value
    var url = "http://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=" + WeatherKy;
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      
    });
});