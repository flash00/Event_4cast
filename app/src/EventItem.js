var React = require('react');

function EventItem (props) {
  console.log(props)
  return (
    <div onClick={props.onClick} className='eventContainer'>
      <img className='event-image' src={props} alt='Event' />
      <h2 className='subheader'>{props.logo}</h2>
    </div>
  )
}

module.exports = EventItem;

