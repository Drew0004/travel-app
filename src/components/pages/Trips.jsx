import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import MyHeader from '../MyHeader'

const Trips = () => {
  const { trips } = useContext(AppContext);

  return (
    <div>
        <div className='my-landing-bg'>
            <MyHeader />
            <div className="container">
                <h2 className='main-green fw-bold mt-5 mb-4'>La tua App di Viaggi!</h2>
                <p className='text-white w-50'>
                    Traveller nasce con l’idea di rendere i viaggi più semplici che mai!
                    Aggiungi un viaggio, imposta le giornate, aggiungi delle tappe o
                    punti d’interesse in modo da tenere traccia del tuo digitale diario
                    di viaggio! Enjoy!
                </p>
                <div className="text-center">
                    <i className="fa-solid fa-arrow-down text-white fs-1 my-5"></i>
                </div>
            </div>
        </div>
        <div className='container'>
            <h2 className='my-5 my-text-try secondary-green fw-bold'>I tuoi viaggi:</h2>
            {trips.map((elem, index) => (
                <div key={index} className='single-card my-5 p-5 rounded-5' style={{ backgroundImage: `url(${elem.travelInfo.travelImg})` }}>
                    <div className="d-flex align-items-center justify-content-between">
                        <h2 className='text-white display-5 fw-bold text-uppercase'>{elem.travel}</h2>
                        <h4 className='text-white'>Date: {elem.travelInfo.dateStart} - {elem.travelInfo.dateEnd}</h4>
                    </div>
                    <p className='text-white fs-6 w-75 fw-light my-4'>{elem.travelInfo.description}</p>
                    <div className="text-end">
                        <Link
                            className='text-decoration-none my-main-btn px-5 py-2'
                            to={`/days/${elem.travel}`}
                            state={{ 
                                trip: elem,
                            }}
                            >
                            <span>Vedi Viaggio</span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Trips;