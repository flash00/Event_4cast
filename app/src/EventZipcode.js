var React = require('react');
var PropTypes = require('prop-types');
// var App = require('./App');
// var ReactRouter = require('react-router-dom');
var event_api = require('./utils/event_api');

class EventZipcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_zipcode: '',
    };
    this.handleSubmitEventZipcode = this.handleSubmitEventZipcode.bind(this);
    this.handleUpdateEventZipcode = this.handleUpdateEventZipcode.bind(this);
  }

  handleSubmitEventZipcode () {
    event_api.getEvents(this.state.event_zipcode)
      .then(function (res) {
        console.log(res)
      })
    this.props.onSubmitEventZipcode(this.state.event_zipcode)

    this.setState(function () {
      return {
        event_zipcode: ''
      }
    })
  }

  handleUpdateEventZipcode (e) {
    var zip = e.target.value;
    this.setState(function () {
      return {
        event_zipcode: zip
      }
    });
  }

  render() {
    return (
      <div
        className='event-zipcode-container'
        style={{flexDirection: this.props.direction}}>
        <input
          className='form-control'
          onChange={this.handleUpdateEventZipcode}
          placeholder='Enter Search City'
          type='text'
          value={this.state.event_zipcode} />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success-event'
          onClick={this.handleSubmitEventZipcode}>
            Search Events
        </button>
      </div>
    )
  }
}


EventZipcode.defaultProps = {
  direction: 'column'
}

EventZipcode.propTypes = {
  direction: PropTypes.string,
}

module.exports = EventZipcode;