import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import getActualDay from '../../utils/DateGenerator';

const Days = () => {
  const { trips } = useContext(AppContext);

  return (
    <ul>
      {trips.map((elem, index) => (
        <li key={index}>
          {Array(elem.numberOfDays).fill().map((_, dayIndex) => (
            <div key={dayIndex}>
              <h2 className='text-white'>Day {dayIndex + 1}</h2>
              <Link 
                to={`${dayIndex + 1}`} 
                state={{
                  trip: elem,
                  dayIndex: dayIndex,
                  actualDay: getActualDay(elem.numberOfDays, elem.travelInfo.dateStart, dayIndex)
                }}
              >
                Go to Day {dayIndex + 1}
              </Link>
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default Days;


