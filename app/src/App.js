var React = require('react');
var Zipcode = require('./Zipcode');
var Forecast = require('./Forecast');
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
                <h1>Event weather forecast.</h1>
                <Zipcode
                  direction='row'
                  onSubmitZipcode={function(city){
                    props.history.push({
                      pathname: 'forecast',
                      search: '?city=' + city
                    });
                  }}
                  zipcode={123} />
              </div>
          )
        }} />

        <Route exact path='/' render={function (props) {
          return (
            <div className='home-container' style={{background:"linear-gradient(cyan,transparent),linear-gradient(-45deg,magenta,transparent),linear-gradient(45deg,yellow,transparent)"}}
             >
              <h1 className='header'>Enter City, State</h1>
              <Zipcode
                direction='column'
                onSubmitZipcode={function (city) {
                  props.history.push({
                    pathname: 'forecast',
                    search: '?city=' + city
                  })
                }}
                zipcode={123} />
            </div>
          )
        }} />

        <Route path='/forecast' component={Forecast} />
      </div>
    </BrowserRouter>
    )
  }
}

module.exports = App;