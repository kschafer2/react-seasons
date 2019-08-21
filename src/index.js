import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

//must extend React.Component
class App extends React.Component {
  constructor(props) {
    //must be called
    super(props);

    //initialize state with object
    this.state = { latitude: null };

    //get user location
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    window.navigator.geolocation.getCurrentPosition(
      //callbacks not called during construction

      //on success
      (position) => {
        //setState must be called to update state after initialization
        this.setState({ latitude: position.coords.latitude });
      },
      //on failure
      (err) => console.log(err)
    );
  }

  //render must be defined in React class
  render() {
    return <div>Latitude: {this.state.latitude}</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
