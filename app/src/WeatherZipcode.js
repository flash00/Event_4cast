var React = require('react');
var PropTypes = require('prop-types');
var weather_api = require('./utils/weather_api');

class WeatherZipcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather_zipcode: '',
    };

    this.handleSubmitWeatherZipcode = this.handleSubmitWeatherZipcode.bind(this);
    this.handleUpdateWeatherZipcode = this.handleUpdateWeatherZipcode.bind(this);
  }
  handleSubmitWeatherZipcode () {
    weather_api.getForecast(this.state.weather_zipcode)
      .then(function (res) {
        console.log(res)
      })
    this.props.onSubmitWeatherZipcode(this.state.weather_zipcode)

    this.setState(function () {
      return {
        weather_zipcode: ''
      }
    })
  }

  handleUpdateWeatherZipcode (e) {
    var zip = e.target.value;
    this.setState(function () {
      return {
        weather_zipcode: zip
      }
    });
  }

  render() {
    return (
      <div
        className='weather-zipcode-container'
        style={{flexDirection: this.props.direction}}>
        <input
          className='form-control'
          onChange={this.handleUpdateWeatherZipcode}
          placeholder='Enter Search City'
          type='text'
          value={this.state.weather_zipcode} />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success-event'
          onClick={this.handleSubmitWeatherZipcode}>
            Check Weather
        </button>
      </div>
    )
  }
}


WeatherZipcode.defaultProps = {
  direction: 'column'
}

WeatherZipcode.propTypes = {
  direction: PropTypes.string,
}

module.exports = WeatherZipcode;