import React from 'react';
import { useLocation } from 'react-router-dom';
import Stop from './Stop';

const Day = () => {
  const location = useLocation();
  const { trip, dayIndex, actualDay } = location.state || {};
  
  const filteredStops = trip.stops.filter(singleStop => 
    singleStop && singleStop.stopDate === actualDay
  );

  return (
    <div>
      <h1 className='text-white'>Day {dayIndex + 1}</h1>
      <p className='text-white'>Actual Day: {actualDay}</p>
      {filteredStops.length > 0 ? (
        filteredStops.map((singleStop, stopIndex) => (
          <div key={stopIndex}>
            <Stop singleStop={singleStop} />
          </div>
        ))
      ) : (
        <div className='text-white'>Sembra non ci siano tappe...</div>
      )}
    </div>
  );
};

export default Day;


