import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

//must extend React.Component
class App extends React.Component {
  constructor(props) {
    // must be called
    super(props);

    // initialize state with object
    this.state = { latitude: null, errorMessage: '' };
  }

  componentDidMount() {
    // get user location
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    window.navigator.geolocation.getCurrentPosition(
      // setState must be called to update state after initialization
      // on success
      (position) => this.setState({ latitude: position.coords.latitude }),

      // on failure
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // render must be defined in React class
  render() {
    var lat = this.state.latitude;
    var error = this.state.errorMessage;

    if(!lat && error) {
      return <div>Error: {error}</div>
    }

    if(lat && !error) {
      return <div>Latitude: {lat}</div>
    }

    return <div>Loading...</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
