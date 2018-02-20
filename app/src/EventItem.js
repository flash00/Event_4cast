var React = require('react');

function EventItem (props) {
  var visual = props.url;
  var info = props.description;
  var name = props.name;
  return (
<h2 className='subheader'>{props.name}</h2>
  )

  // console.log(props)
  // if (props.length === 0) {
  //   return null
  // }
  // else {
  //   return
  //     <div onClick={props.onClick} className='eventContainer'>
  //     //   <img className='event-image' src={props} alt='Event' />
  //       // <h2 className='subheader'>{props.logo}</h2>
  //     </div>
  // }
}

module.exports = EventItem;

