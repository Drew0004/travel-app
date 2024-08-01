import React from 'react';
import { useLocation } from 'react-router-dom';

const Day = () => {
  const location = useLocation();
  const { trip, dayIndex, actualDay } = location.state || {};

  return (
    <div>
      <h1 className='text-white'>Day {dayIndex + 1}</h1>
      <p className='text-white'>Actual Day: {actualDay}</p>
    </div>
  );
};

export default Day;


