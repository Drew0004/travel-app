import React, { useContext } from 'react';
import { AppContext } from '../App';
import Day from './Day';
import getActualDay from '../../utils/DateGenerator';

const Days = () => {
    const { trips } = useContext(AppContext);

    return (
        <ul>
            {trips.map((elem, index) => (
                <li key={index}>
                    {Array(elem.numberOfDays).fill().map((_, dayIndex) => (
                        <Day
                            key={dayIndex}
                            {...elem}
                            dayIndex={dayIndex}
                            actualDay={getActualDay(elem.numberOfDays, elem.travelInfo.dateStart, dayIndex)}
                        />
                    ))}
                </li>
            ))}
        </ul>
    );
}

export default Days;
