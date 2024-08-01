import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import getActualDay from '../../utils/DateGenerator';
import { useLocation } from 'react-router-dom';

const Days = () => {
  const { trips } = useContext(AppContext);
  const location = useLocation();
  const { trip } = location.state || {};
  console.log(trip)

  return (
    <ul>
        <li>
          {Array(trip.numberOfDays).fill().map((_, dayIndex) => (
            <div key={dayIndex}>
              <h2 className='text-white'>Day {dayIndex + 1}</h2>
              <Link 
                to={`${dayIndex + 1}`} 
                state={{
                  trip: trip,
                  dayIndex: dayIndex,
                  actualDay: getActualDay(trip.numberOfDays, trip.travelInfo.dateStart, dayIndex)
                }}
              >
                Go to Day {dayIndex + 1}
              </Link>
            </div>
          ))}
        </li>
    </ul>
  );
};

export default Days;


