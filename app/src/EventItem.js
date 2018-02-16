var React = require('react');

function EventItem (props) {
  var name = props.name;
  var date = props.date;
  var url = props.url;
  var image = props.logo.url;

  return (
    <div onClick={props.onClick} className='eventContainer'>
      <h2 className='subheader'>{name}</h2>
      <h2 className='subheader'>{date}</h2>
      <h2 className='subheader'>{url}</h2>
      <h2 className='subheader'>{image}</h2>
    </div>
  )
}

module.exports = EventItem;