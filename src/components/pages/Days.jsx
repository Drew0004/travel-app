import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import getActualDay from '../../utils/DateGenerator';
import { useLocation } from 'react-router-dom';
import MyHeader from '../MyHeader';

const Days = () => {
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])
  const { trips } = useContext(AppContext);
  const location = useLocation();
  const { trip } = location.state || {};

  const ref = useRef(null)

  const handleScroll = () =>{
    if(!ref || !ref.current){
      return  
    }
    ref.current.scrollIntoView({behavior: 'smooth', block: 'center'})
  }
  

  return (
    <div>
        <div className='my-tripimg-bg' style={{ backgroundImage: `url(${trip.travelInfo.travelImg})` }}>
            <MyHeader />
            <div className="container my-padding-top">
                <div className=" d-flex justify-content-between align-items-center">
                    <h2 className='main-green fw-bold mt-5 mb-4'>{trip.travel}</h2>
                    <h4 className='fw-bold m-0 main-green'>{trip.travelInfo.dateStart} - {trip.travelInfo.dateEnd}</h4>
                </div>
                <p className='text-white w-50'>
                    {trip.travelInfo.description}
                </p>
                <div className="text-center">
                    <i onClick={handleScroll} className="fa-solid fa-arrow-down text-white fs-1 my-5 c-pointer"></i>
                </div>
            </div>
        </div>
        <div className='container'>
            <h2 className='my-5 my-text-try secondary-green fw-bold'>Le tue giornate:</h2>
            <div className="row justify-content-between">
                {Array(trip.numberOfDays).fill().map((_, dayIndex) => (
                    <div ref={ref} key={dayIndex} className='single-card col-5 rounded-5 p-5 my-4' style={{ backgroundImage: `url(${trip.travelInfo.travelImg})` }}>
                        <h2 className='text-white fw-bold mb-5'>Day {dayIndex + 1}</h2>
                        <Link
                            className='text-decoration-none my-main-btn px-3 py-2' 
                            to={`${dayIndex + 1}`} 
                            state={{
                                trip: trip,
                                dayIndex: dayIndex,
                                actualDay: getActualDay(trip.numberOfDays, trip.travelInfo.dateStart, dayIndex)
                            }}
                        >
                            <span>Vedi giornata</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Days;


