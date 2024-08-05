import React from 'react';
import { useLocation } from 'react-router-dom';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import Stop from './Stop';

const Day = () => {
  const location = useLocation();
  const { trip, dayIndex, actualDay } = location.state || {};
  
  const filteredStops = trip.stops.filter(singleStop => 
    singleStop && singleStop.stopDate === actualDay
  );
  
  //Dati maps api
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  const myMapId = process.env.REACT_APP_MAP_ID
  const position = {lat: 53.54, lng: 10}

  return (
    <APIProvider apiKey={googleMapsApiKey}>
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
      {/* Sezione Mappa */}
      <div style={{ height: '400px' }}>
        <Map zoom={9} center={position} mapId={myMapId}>
            <AdvancedMarker position={position}>
                <Pin/>
            </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};

export default Day;


