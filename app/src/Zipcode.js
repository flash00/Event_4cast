var React = require('react');
var PropTypes = require('prop-types');
var ReactRouter = require('react-router-dom');

class Zipcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
    };

    this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this);
    this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this);
  }
  handleSubmitZipcode () {
    // api.getCurrentWeather(this.state.zipcode)
    //   .then(function (res) {
    //     console.log(res)
    //   })
    this.props.onSubmitZipcode(this.state.zipcode)

    this.setState(function () {
      return {
        zipcode: ''
      }
    })
  }
  handleUpdateZipcode (e) {
    var zip = e.target.value;
    this.setState(function () {
      return {
        zipcode: zip
      }
    });
  }
  render() {
    console.log('PROPS', this.props)
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
            Check Weather
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