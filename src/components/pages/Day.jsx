import React from 'react';
import Stop from './Stop';

const Days = ({ dayIndex, actualDay, stops }) => {
  return (
    <li className='text-white'>
      Day {dayIndex + 1}
      Data: {actualDay}
      <div>
        {stops.map((singleStop, index) => (
          singleStop.stopDate === actualDay ? <Stop key={index} {...singleStop} /> : null
        ))}
      </div>
    </li>
  );
};

export default Days;

