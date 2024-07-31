import React from 'react';
import Stop from './Stop';

const Day = ({ dayIndex, actualDay, stops }) => {
  return (
    <div className='text-white'>
      Day {dayIndex + 1}
      Data: {actualDay}
      <div>
        {stops.map((singleStop, index) => (
          singleStop.stopDate === actualDay ? <Stop key={index} {...singleStop} /> : null
        ))}
      </div>
    </div>
  );
};

export default Day;

