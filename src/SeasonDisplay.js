import React from 'react';

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = props => {
  const isWinter = 'winter' === getSeason(props.lat, new Date().getMonth());
  const message = isWinter ? 'Burr, it is chilly!' : 'Let\'s hit the beach!';
  const icon = isWinter ? 'snowflake' : 'sun';

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{message}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
