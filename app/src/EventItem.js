var React = require('react');
// var utils = require('./utils/helpers');
// var getDate = utils.getDate;

function EventItem (props) {
  return (
    <div onClick={props.onClick} className='eventContainer'>

    </div>
  )
}

module.exports = EventItem;