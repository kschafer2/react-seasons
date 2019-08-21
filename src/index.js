import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return <div>Latitude: </div>
};

ReactDOM.render(<App />, document.querySelector('#root'));
