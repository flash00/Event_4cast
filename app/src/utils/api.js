var axios = require('axios');
var _baseURL = 'http://api.openweathermap.org/data/2.5/';


function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);}).join('&')
}

function prepUrl (type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    APPID: process.env.REACT_APP_WEATHER_APIKEY,
    cnt: 1
  }
}

function getCurrentWeather (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then(function (currentWeatherData) {
      return currentWeatherData.data
    })
}

function getForecast (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast', queryStringData)

  return axios.get(url)
    .then(function (forecastData) {
      return forecastData.data
    })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
};
