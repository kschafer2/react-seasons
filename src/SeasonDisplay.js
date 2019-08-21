import React from 'react';

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());

  const message = season === 'winter' ?
  'Burr, it is chilly!' : 'Let\'s hit the beach!'

  return <div>{message}</div>
};

export default SeasonDisplay;
