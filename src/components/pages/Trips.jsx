import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import MyHeader from '../MyHeader'
import Modal from '../Modal';

const Trips = () => {
  const { trips, setTrips } = useContext(AppContext);
  const ref = useRef(null)

  const handleScroll = () =>{
    if(!ref || !ref.current){
      return  
    }
    ref.current.scrollIntoView({behavior: 'smooth', block: 'center'})
  }

  return (
    <div>
        <div className='my-landing-bg d-flex align-items-center'>
            <MyHeader />
            <div className="container my-padding-top">
                <div>
                    <h1 className='main-green fw-bold mt-5 mb-4 display-1'>La tua App di Viaggi!</h1>
                    <p className='text-white w-50 fs-4'>
                        Traveller nasce con l’idea di rendere i viaggi più semplici che mai!
                        Aggiungi un viaggio, imposta le giornate, aggiungi delle tappe o
                        punti d’interesse in modo da tenere traccia del tuo digitale diario
                        di viaggio! Enjoy!
                    </p>
                    <div className="text-center">
                        <i onClick={handleScroll} className="fa-solid fa-arrow-down text-white fs-1 my-5 c-pointer"></i>
                    </div>
                </div>
            </div>
        </div>
        {
            trips.length !== 0 ?
            <div className='container'>
                <h2  className='my-5 my-text-try secondary-green fw-bold'>I tuoi viaggi:</h2>
                {trips.map((elem, index) => (
                    <div ref={ref} key={index} className='single-card my-5 p-5 rounded-5' style={{ backgroundImage: `url(${elem.travelInfo.travelImg})` }}>
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

                            <Modal elem= {elem}/>
                        </div>
                    </div>
                ))}
            </div> :
            <div className="container">
                <div ref={ref} className="cta-wrapper p-5 rounded-5 my-5">
                    <h2 className='fw-bold main-green m-0 text-center'>Inizia subito a pianificare l'avventura dei tuoi sogni, aggiungi un viaggio!</h2>
                    <div className='text-center mt-5'>
                        <Link className='text-decoration-none add-note-btn px-5 py-3' to={'/add-new-trip'}>
                            <span>Aggiungi viaggio +</span>
                        </Link>
                    </div>
                </div>
            </div>
        }
    </div>
  );
};

export default Trips;