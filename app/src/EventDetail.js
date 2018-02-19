var React = require('react');
var event_api = require('./utils/event_api');
var EventItem = require('./EventItem')

class EventDetail extends React.Component {
  render() {
    var props = this.props.location.state;
    return (
      <div>
        <EventItem name={props} />
        <div className='description-container'>
          <p>{props.city}</p>
          <p>{props.weather[0].description}</p>
          <p>location: {props.logo.name)}  degrees</p>
          <p>date: {props.logo.temp_max)} degrees</p>
          <p>humidity: {props.main.humidity}</p>
        </div>
      </div>
    )
  }
}

module.exports = EventDetail;