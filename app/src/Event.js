var React = require('react');
var event_api = require('./utils/event_api');
var queryString = require('query-string');

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: [],
      loading: true
    }

    this.makeRequest = this.makeRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }
  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }
  makeRequest(city) {
    this.setState(function () {
      return {
        loading: true
      }
    })

    event_api.getEvents(city)
    .then(function (res) {
      this.setState(function () {
        return {
          loading: false,
          eventData: res,
        }

      })
    }.bind(this))

  }

  handleClick(city) {
    city.city = this.city;
    this.props.history.push({
      pathname: '/event-item/' + this.city,
      state: city,
    })
  }

render() {
    const eventData = this.state.eventData
    if (eventData.length === 0)
      {
        return null
      }
    else
      {
        const Arr = Object.entries(eventData)
        const Brites = Object.entries(Arr[1][1])
        return this.state.loading === true
        ? <h1 className='event-header'> Loading </h1>
        : <div>
            <h1 className='event-header'>{this.city}</h1>
            <div className='event-container' style={{background:"linear-gradient(cyan,transparent),linear-gradient(-45deg,magenta,transparent),linear-gradient(45deg,yellow,transparent)"}}
            >
        <ul className='daycontainer' style={{listStyleType:"none"}}>
          {Brites.map((brite, index) =>
              <p className='event-description-container' key={index}>
              <li style={{fontWeight:"bold", backgroundColor: "#eaeaea"}}>{brite[1].name.text}</li>
              <li style={{ backgroundColor: "#eaeaea"}}>{brite[1].start.local}</li>
              <li style={{ backgroundColor: "#FAFAFA"}}>{brite[1].description.text}</li>
              <br></br>
              </p>
          )}
        </ul>

            </div>
          </div>
      }
  }
}


module.exports = Event;

