var React = require('react');
var Zipcode = require('./Zipcode');

class App extends React.Component {
  render () {
    return (
      <div className='container'>

        <div className='navbar'>
          <h1>Weather for your event:</h1>
          <Zipcode
            direction='row'
            onSubmitZipcode={function(){}}
            onUpdateZipcode={function(){}}
            zipcode={123} />
        </div>

        <div className='home-container' style={{background:"linear-gradient(cyan,transparent),linear-gradient(-45deg,magenta,transparent),linear-gradient(45deg,yellow,transparent)"}}
         >
          <h1 className='header'>Enter City, State</h1>
          <Zipcode
            direction='column'
            onSubmitZipcode={function(){}}
            onUpdateZipcode={function(){}}
            zipcode={123} />
        </div>

      </div>
    )
  }
}

module.exports = App;