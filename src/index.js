import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//must extend React.Component
class App extends React.Component {
  // initialize state with object
  state = { lat: null, error: '' };

  // good place to load data
  componentDidMount() {
    // get user location
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    window.navigator.geolocation.getCurrentPosition(
      // setState must be called to update state after initialization
      // on success
      (position) => this.setState({ lat: position.coords.latitude }),

      // on failure
      (err) => this.setState({ error: err.message })
    );
  }

  // render must be defined in React class
  render() {
    const lat = this.state.lat;
    const err = this.state.error;

    if(!lat && err) {
      return <div>Error: {err}</div>
    }

    if(lat && !err) {
      // passing state as a prop changes child state, too
      return <SeasonDisplay lat={lat} />
    }

    return <Spinner message="Please accept location request"/>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
