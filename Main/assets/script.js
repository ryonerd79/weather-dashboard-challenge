var WeatherKy = "81579ebbf941cb5a0a56ea078ca19e47"
var searchButton = document.querySelector("#search-button");
var cityButton = document.querySelector("#city-button");
var fiveDayRow = document.querySelector('#weather-row')
var weatherInput = document.querySelector("#input");
const cityWeather = document.querySelector('.city-weather');
var rightNow = dayjs().format('MMM DD, YYYY');
$('#currentDay').text(rightNow);
var cityArray = []




function getWeather() {
  fiveDayRow.innerHTML = ``
  var city = weatherInput.value
  cityArray.push(city)
  localStorage.setItem('cities', cityArray)
  var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + WeatherKy;
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
      console.log(data)
      cityWeather.innerHTML = `
     <h1>${cityName} (${rightNow})</h1>
     <img src="https://openweathermap.org/img/w/${weatherIcon}.png" height="40" width="40">
     <p>Temp: ${temp}</p>
     <p>Wind: ${wind}</p>
     <p>Humidity: ${humidity}</p>
     `
     localStorage.getItem(data);
    });
};

searchButton.addEventListener("click", getWeather)

var cityButtons = document.querySelectorAll('#city-button')
for (let i = 0; i < cityButtons.length; i++) {
  cityButtons[i].addEventListener("click", function(event){
    fiveDayRow.innerHTML = ``
    var city = event.target.dataset.city 
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + WeatherKy;
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
        cityWeather.innerHTML = `
       <h1>${cityName} (${rightNow})</h1>
       <img src="https://openweathermap.org/img/w/${weatherIcon}.png" height="40" width="40">
       <p>Temp: ${temp}</p>
       <p>Wind: ${wind}</p>
       <p>Humidity: ${humidity}</p>
       `
       localStorage.getItem(data);
      });
    
      var url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + WeatherKy;
      fetch(url2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
        for (let i = 0; i < 33; i += 8) {
        var weatherIcon = data.list[i].weather[0].icon;
        var date = data.list[i].dt_txt  
        var temp = data.list[i].main.temp;
        var wind = data.list[i].wind.speed;
        var humidity = data.list[i].main.humidity;
        var card = document.createElement('div');
        var dateEl = document.createElement('p');
        dateEl.textContent = `${date}`
        var tempEl = document.createElement('p');
        tempEl.textContent = `Temp: ${temp} Wind: ${wind} Humidity: ${humidity}`
        var weatherIconEl = document.createElement('img');
        weatherIconEl.src = `https://openweathermap.org/img/w/${weatherIcon}.png`
        var windEl = document.createElement('p');
        var humidityEl = document.createElement('p');
        card.append(weatherIconEl);
        card.append(tempEl);
        card.append(windEl);
        card.append(humidityEl);
        card.append(dateEl);
        fiveDayRow.append(card);

        localStorage.getItem(data);
      }
  })
})}
searchButton.addEventListener("click", function () {
  fiveDayRow.innerHTML = ``
  var city = weatherInput.value
  var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + WeatherKy;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    for (let i = 0; i < 33; i += 8) {
    
// var rightNow = dayjs().format('MMM DD, YYYY').text();
    var weatherIcon = data.list[i].weather[0].icon;
    var date = data.list[i].dt_txt  
    var temp = data.list[i].main.temp;
    var wind = data.list[i].wind.speed;
    var humidity = data.list[i].main.humidity;
    var card = document.createElement('div');
    var dateEl = document.createElement('p');
    dateEl.textContent = `${date}`
    var tempEl = document.createElement('p');
    tempEl.textContent = `Temp: ${temp} Wind: ${wind} Humidity: ${humidity}`
    var weatherIconEl = document.createElement('img');
    weatherIconEl.src = `https://openweathermap.org/img/w/${weatherIcon}.png`
    var windEl = document.createElement('p');
    var humidityEl = document.createElement('p');
    card.append(weatherIconEl);
    card.append(tempEl);
    card.append(windEl);
    card.append(humidityEl);
    card.append(dateEl);
    fiveDayRow.append(card);

    localStorage.getItem(data);
  }
})
})
