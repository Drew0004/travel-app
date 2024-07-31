import React, { useState, createContext } from 'react';
import { Link } from 'react-router-dom';
import data from '../../assets/storage/data';
import Day from './Day';
import getActualDay from '../../utils/DateGenerator';

export const AppContext = createContext();

const Trips = () => {
    const [trips, setTrips] = useState(data);

    return (
        <>
            <h2 className='text-center my-2  my-text-try text-white'>I tuoi viaggi:</h2>
            <AppContext.Provider value={{ trips }}>
                {trips.map((elem, index) => (
                    <div key={index} className='item'>
                        <h2 className='text-white'>{elem.travel}</h2>
                        <h3 className='text-white'>Data inizio {elem.travelInfo.dateStart}</h3>
                        <h3 className='text-white'>Data fine {elem.travelInfo.dateEnd}</h3>
                        <p className='text-white'>Descrizione: {elem.travelInfo.description}</p>
                        <img className='w-25' src={elem.travelInfo.travelImg} alt={elem.travel} />
                        <Link to={`/${elem.travelInfo.dateStart}`}>Go to Day</Link>
                        <ul>
                            {Array(elem.numberOfDays).fill().map((_, dayIndex) => (
                                <Day key={dayIndex} {...elem} dayIndex={dayIndex} actualDay={getActualDay(elem.numberOfDays, elem.travelInfo.dateStart, dayIndex)} />
                            ))}
                        </ul>
                    </div>
                ))}
            </AppContext.Provider>
        </>
    );
}

export default Trips;

