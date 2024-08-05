import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

const Trips = () => {
  const { trips } = useContext(AppContext);

  return (
    <>
      <h2 className='text-center my-2 my-text-try text-white'>I tuoi viaggi:</h2>
      {trips.map((elem, index) => (
        <div key={index} className='item'>
          <h2 className='text-white'>{elem.travel}</h2>
          <h3 className='text-white'>Data inizio {elem.travelInfo.dateStart}</h3>
          <h3 className='text-white'>Data fine {elem.travelInfo.dateEnd}</h3>
          <p className='text-white'>Descrizione: {elem.travelInfo.description}</p>
          <img className='w-25' src={elem.travelInfo.travelImg} alt={elem.travel} />
          <Link 
            to={`/days/${elem.travel}`}
            state={{ 
                trip: elem,
            }}
            >Go to Days</Link>
        </div>
      ))}
    </>
  );
};

export default Trips;