var axios = require('axios');
var _event_baseURL = 'https://www.eventbriteapi.com/v3/events/search/';

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);}).join('&')
}


function prepUrl (queryStringData) {
  return _event_baseURL + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
  return {
    'location.address': city,
    'start_date.keyword': 'this_week',
    token: process.env.REACT_APP_EVENT_APIKEY,
  }
}

function getEvents (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl(queryStringData)

  return axios.get(url)
    .then(function (eventData) {
      return eventData.data
    })
}


module.exports = {
  getEvents: getEvents
};
