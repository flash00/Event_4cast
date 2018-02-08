var React = require('react');
var PropTypes = require('prop-types');

class Zipcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 90210
    };
  }
  handleSubmitZipcode () {

  }
  handleUpdateZipcode () {

  }
  render() {
    return (
      <div
        className='zipcode-container'
        style={{flexDirection: this.props.direction}}>
        <input
          className='form-control'
          onChange={this.handleUpdateZipcode}
          placeholder='City, State'
          type='text'
          value={this.state.zipcode} />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={this.handleSubmitZipcode}>
            Get Weather
        </button>
      </div>
    )
  }
}

Zipcode.defaultProps = {
  direction: 'column'
}

Zipcode.propTypes = {
  direction: PropTypes.string,
}

module.exports = Zipcode;