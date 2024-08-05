import React from 'react';

const Stop = ({ singleStop }) => {
    return (
        <div className='text-white'>
            <h3>Ciao sono la tappa: {singleStop.stopName}</h3>
            <h5>Coordinate: {singleStop.lat}, {singleStop.lng}</h5>
        </div>
    );
};

export default Stop;

