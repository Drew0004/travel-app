import React from 'react';
import { useLocation } from 'react-router-dom';

const Day = () => {
    const location = useLocation();
    const { trip, dayIndex, actualDay } = location.state;

    return (
        <div>
            <h1>Day {dayIndex + 1}</h1>
            <p>Trip Info: {JSON.stringify(trip)}</p>
            <p>Actual Day: {actualDay}</p>
        </div>
    );
}

export default Day;

