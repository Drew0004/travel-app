import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import Stop from './Stop';

const Day = () => {
    // dati api maps
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const myMapId = process.env.REACT_APP_MAP_ID;

    // dati singolo elemento
    const location = useLocation();
    const { trip, dayIndex, actualDay } = location.state || {};

    // dati coordinate città
    const [cityLocation, setCityLocation] = useState(null);
    
    // array di fermate filtrate
    const [filteredStops, setFilteredStops] = useState([]);

    // stati di loader e input
    const [loading, setLoading] = useState(true);
    const [isInputOpen, setIsInputOpen] = useState(false);

    // iniziale sezione API coordinate città
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

    // recupero fermate dal localStorage
    const loadStopsFromLocalStorage = () => {
        const storedStops = JSON.parse(localStorage.getItem('stops')) || [];
        // const filtered = storedStops.filter(stop => stop.stopDate === actualDay);
        setFilteredStops(storedStops);
    };

    useEffect(() => {
        getCityCoordinates();
        loadStopsFromLocalStorage();
    }, [trip.travel]);

    // sezione API coordinate singola fermata e filtraggio
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

            const storedStops = JSON.parse(localStorage.getItem('stops')) || [];
            const allStops = [...stopsWithCoordinates, ...storedStops.filter(stop => stop.stopDate === actualDay)];
            setFilteredStops(allStops);
            setLoading(false);
        };

        fetchCoordinates();
    }, [trip.stops]);

    // loader
    if (loading || !cityLocation) {
        return (
            <div className='text-white my-5'>
                <h2>Caricamento...</h2>
            </div>
        );
    }

    const position = { lat: cityLocation.lat, lng: cityLocation.lng };

    // funzione per aggiungere nuova fermata
    const addNewStop = async (e) => {
        e.preventDefault();
        
        const stopName = e.target.stopName.value;
        const stopImgFile = e.target.stopImg.files[0];

        const reader = new FileReader();
        reader.onloadend = async () => {
            const stopImgBase64 = reader.result;

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
                stopImg: stopImgBase64, // Base64 string
                stopRanking: 0,
                stopDone: false,
                stopNotes: '',
                lat: location?.lat || '',
                lng: location?.lng || ''
            };

            const updatedStops = [...filteredStops, newStop];
            setFilteredStops(updatedStops);

            // Salvataggio fermate nel localStorage
            const allStops = JSON.parse(localStorage.getItem('stops')) || [];
            localStorage.setItem('stops', JSON.stringify([...allStops, newStop]));

            setIsInputOpen(false);
        };

        if (stopImgFile) {
            reader.readAsDataURL(stopImgFile);
        } else {
            reader.onloadend();
        }
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





