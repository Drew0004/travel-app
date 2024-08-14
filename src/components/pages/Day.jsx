import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import Stop from './Stop';

const Day = () => {

    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const myMapId = process.env.REACT_APP_MAP_ID;

    const location = useLocation();
    const { trip, dayIndex, actualDay } = location.state || {};

    const [cityLocation, setCityLocation] = useState(null);
    const [filteredStops, setFilteredStops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isInputOpen, setIsInputOpen] = useState(false);

    const getCityCoordinates = async () => {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
            params: {
                address: trip.travel,
                key: googleMapsApiKey
            }
        });
        const location = response.data.results[0].geometry.location;
        setCityLocation(location);
    };

    useEffect(() => {
        getCityCoordinates();
    }, [trip.travel]);

    useEffect(() => {
        const fetchCoordinates = async () => {
            const stopsWithCoordinates = await Promise.all(trip.stops
                .filter(singleStop => singleStop.stopDate === actualDay)
                .map(async (singleStop) => {
                    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
                        params: {
                            address: singleStop.stopName,
                            key: googleMapsApiKey
                        }
                    });
                    const location = response.data.results[0].geometry.location;
                    return {
                        ...singleStop,
                        lat: location?.lat || '',
                        lng: location?.lng || ''
                    };
                })
            );
            setFilteredStops(stopsWithCoordinates);
            setLoading(false);
        };

        fetchCoordinates();
    }, [trip.stops]);

    if (loading || !cityLocation) {
        return (
            <div className='text-white my-5'>
                <h2>Caricamento...</h2>
            </div>
        );
    }

    const position = { lat: cityLocation.lat, lng: cityLocation.lng };

    const addNewStop = async (e) => {
        e.preventDefault();
        
        const stopName = e.target.stopName.value;

        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
            params: {
                address: stopName,
                key: googleMapsApiKey
            }
        });
        const location = response.data.results[0].geometry.location;

        const newStop = {
            stopName: stopName,
            stopDate: actualDay,
            stopDescription: e.target.stopDescription.value,
            stopImg: e.target.stopImg.files[0],
            stopRanking: '',
            stopDone: false,
            stopNotes: '',
            lat: location?.lat || '',
            lng: location?.lng || ''
        };

        setFilteredStops([
            ...filteredStops,
            newStop
        ]);

        setIsInputOpen(false);

    };

    return (
        <APIProvider apiKey={googleMapsApiKey}>
            <div>
                <button className='btn btn-success' onClick={() => setIsInputOpen(!isInputOpen)}>
                    Aggiungi Tappa +
                </button>
                {
                    isInputOpen && 
                    <form onSubmit={addNewStop}>
                        <input type="text" name='stopName' placeholder='Inserisci il nome della tappa...'/>
                        <textarea name="stopDescription" placeholder='Inserisci una descrizione...'></textarea>
                        <input type="file" name="stopImg"/>
                        <button className='btn btn-primary'>Aggiungi</button>
                    </form>
                }
            </div>
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
            <div className='my-5' style={{ height: '300px' }}>
                <Map defaultZoom={12} defaultCenter={position} mapId={myMapId}>
                    {filteredStops.map((singlePin, pinIndex) => (
                        singlePin.lat && singlePin.lng &&
                            <AdvancedMarker key={pinIndex} position={{ lat: singlePin.lat, lng: singlePin.lng }}>
                                <Pin />
                            </AdvancedMarker>
                    ))}
                </Map>
            </div>
        </APIProvider>
    );
};

export default Day;



