var React = require('react');
var event_api = require('./utils/event_api');
var EventItem = require('./EventItem')

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: props.searchResults
    }
  }

  render() {
    return(
      <div className='event-container' style={{background:"linear-gradient(cyan,transparent),linear-gradient(-45deg,magenta,transparent),linear-gradient(45deg,yellow,transparent)"}}
      >
      <div className='search-results'>
        {this.props.searchResults.map((result, index) => {
          return(
            <EventItem event={result} key={index} />
          )
        })}
      </div>
      </div>
    )
  }
}

module.exports = EventList;