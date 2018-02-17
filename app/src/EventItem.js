var React = require('react');

function EventItem (props) {
  var name = props.name;
  var date = props.date;
  var url = props.url;
  // var image = props.logo.url;

  return (
      <div className='event-container' style={{background:"linear-gradient(cyan,transparent),linear-gradient(-45deg,magenta,transparent),linear-gradient(45deg,yellow,transparent)"}}
      >
    <div onClick={props.onClick} className='eventContainer'>
      <h2 className='subheader'>{name}</h2>
      <h2 className='subheader'>{date}</h2>
      <h2 className='subheader'>{url}</h2>
    </div>
    </div>
  )
}

module.exports = EventItem;