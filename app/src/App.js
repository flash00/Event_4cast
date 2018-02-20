var React = require('react');
var EventZipcode = require('./EventZipcode');
var WeatherZipcode = require('./WeatherZipcode');
var Forecast = require('./Forecast');
var Detail = require('./Detail');
var Event = require('./Event');
var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='container'>

          <Route render={function (props) {
            return (
              <div className='navbar'>
                  <img className='eventbrite-logo' src={'/images/Eventbrite_wordmark_orange.jpg'} alt='Eventbrite' />
                  <img className='weather-logo' src={'/images/icon-openweathermap-1.png'} alt='OpenWeatherMap' />
              </div>            )
          }} />

        <Route exact path='/' render={function (props) {
          return (
            <div className='home-container' style={{background:"linear-gradient(cyan,transparent),linear-gradient(-45deg,magenta,transparent),linear-gradient(45deg,yellow,transparent)"}}
             >
              <h1 className='header'>Search Events</h1>
              <EventZipcode
                direction='column'
                onSubmitEventZipcode={function (city) {
                  props.history.push({
                    pathname: '/event',
                    search: '?city=' + city
                  })
               }}
               event_zipcode={123} />

              <h1 className='header'>Check Weather</h1>
              <WeatherZipcode
                direction='column'
                onSubmitWeatherZipcode={function (city) {
                  props.history.push({
                    pathname: '/forecast',
                    search: '?city=' + city
                  })
               }}
               weather_zipcode={123} />
               <br></br>
              <div>
                <img className='sunnglasses' src={'/images/sunglasses.png'} alt='Sunglasses' />
              </div>
            </div>
          )
        }} />


        <Route path='/forecast' component={Forecast} />
        <Route path='/event' component={Event} />
        <Route path='/details/:city' component={Detail} />
      </div>
    </BrowserRouter>
    )
  }
}

module.exports = App;