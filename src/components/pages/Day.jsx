import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import Stop from './Stop';
import MyHeader from '../MyHeader';
import ValidateStopForm from '../../utils/ValidateStopForm';

const Day = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const ref = useRef(null)
    const handleScroll = () =>{
    if(!ref || !ref.current){
        return  
    }
    ref.current.scrollIntoView({behavior: 'smooth', block: 'center'})
    }
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

    const [errors, setErrors] = useState({});

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

        const formData = e.target;
        const formErrors = ValidateStopForm(formData);

        const { stopName, stopDescription, stopImg } = formData;

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        
        const stopImgFile = e.target.stopImg.files[0];


        const reader = new FileReader();
        reader.onloadend = async () => {
            const stopImgBase64 = reader.result;

            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
                params: {
                    address: stopName.value,
                    key: googleMapsApiKey
                }
            });
            
            if (response.data.results && response.data.results.length > 0) {
                const location = response.data.results[0].geometry.location;

                const newStop = {
                    stopName: stopName.value,
                    stopDate: actualDay,
                    stopDescription: stopDescription.value,
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
            } else {
                setErrors({ stopName: "Indirizzo non trovato, per favore verifica l'indirizzo inserito." });
            }
        };

        if (stopImgFile) {
            reader.readAsDataURL(stopImgFile);
        } else {
            reader.onloadend();
        }
    };

    return (
        <APIProvider apiKey={googleMapsApiKey}>
            {/* sezione claim */}
            <div className='my-tripimg-bg' style={{ backgroundImage: `url(${trip.travelInfo.travelImg})` }}>
                <MyHeader />
                <div className="container my-padding-top">
                    <div className=" d-flex justify-content-between align-items-center">
                        <h2 className='main-green fw-bold mt-5 mb-4'>{trip.travel}, Day {dayIndex + 1}</h2>
                        <h4 className='fw-bold m-0 main-green'>{actualDay}</h4>
                    </div>
                    <p className='text-white w-50'>
                        {trip.travelInfo.description}
                    </p>
                    <div className="text-center">
                        <i onClick={handleScroll} className="fa-solid fa-arrow-down text-white fs-1 my-5 c-pointer"></i>
                    </div>
                </div>
            </div>
            {/* sezione totale date e aggiunta */}
            <div className='main-green-bg py-5'>
                <div className="container d-flex justify-content-between align-items-center">
                    <h2 className='m-0 fw-bold secondary-green'>Le tue tappe per la giornata: <span className='fs-1 ms-2 mb-0'>{filteredStops.length}</span></h2>
                    <button className='my-tertiary-btn px-4 py-2' onClick={() => setIsInputOpen(!isInputOpen)}>
                        <span>Aggiungi Tappa +</span>
                    </button>
                </div>
            </div>
            <div className="container my-5">
                <div className='form-wrapper'>
                    {
                        isInputOpen && 
                        <form className='row g-0 p-5' onSubmit={addNewStop}>
                            <label className='my-label mb-3' htmlFor="stopName">Meta</label>
                            <input className='mb-3 rounded-5 px-4 py-2 my-input' type="text" name="stopName" placeholder='Inserisci una meta...' required />
                            {errors.stopName && <p className="text-danger">{errors.stopName}</p>}

                            <label className='my-label mb-3' htmlFor="stopDescription">Descrizione della meta</label>
                            <textarea className='mb-3 rounded-5 px-4 py-2 my-input' name="stopDescription" placeholder='Inserisci una descrizione per la tua meta..' required></textarea>
                            {errors.stopDescription && <p className="text-danger">{errors.stopDescription}</p>}

                            <label className='my-label mb-3' htmlFor="stopImg">Immagine</label>
                            <input className='mb-3 form-control rounded-5 my-input' type="file" name='stopImg' required />
                            {errors.stopImg && <p className="text-danger">{errors.stopImg}</p>}
                            
                            <div className="d-flex justify-content-between align-items-center my-4">
                                <button onClick={()=>{setIsInputOpen(false)}} className='my-secondary-btn px-5 py-2'>
                                    <span>Annulla</span>
                                </button>
                                <button className='my-main-btn px-5 py-2' type="submit"> 
                                    <span>Aggiungi +</span>
                                </button>
                            </div>
                        </form>
                    }
                </div>
            </div>
            <div className="container">
                <div ref={ref} className='row g-0 justify-content-between'>
                    {filteredStops.length > 0 ? (
                        filteredStops.map((singleStop, stopIndex) => (
                            <Stop key={stopIndex} singleStop={singleStop} />
                        ))
                    ) : (
                        <div className='text-white'>Sembra non ci siano tappe...</div>
                    )}
                </div>
                <div className="container">
                    {/* Sezione Mappa */}
                    <div className='my-5 overflow-hidden rounded-5' style={{ height: '300px' }}>
                        <Map defaultZoom={12} defaultCenter={position} mapId={myMapId}>
                            {filteredStops.map((singlePin, pinIndex) => (
                                singlePin.lat && singlePin.lng &&
                                    <AdvancedMarker key={pinIndex} position={{ lat: singlePin.lat, lng: singlePin.lng }}>
                                        <Pin />
                                    </AdvancedMarker>
                            ))}
                        </Map>
                    </div>
                </div>
            </div>
        </APIProvider>
    );
};

export default Day;





