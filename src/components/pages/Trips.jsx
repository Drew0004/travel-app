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
                    <i class="fa-solid fa-arrow-down text-white fs-1 my-5"></i>
                </div>
            </div>
        </div>
        <div className='container'>
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
        </div>
    </div>
  );
};

export default Trips;