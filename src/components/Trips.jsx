import React, {useEffect, useState} from 'react'
import data from '../assets/storage/data'
import Day from './Day'
import getActualDay from '../utils/DateGenerator'

const Trips = () => {

    const [trips, setTrips] = useState(data)

    return (
        <>
            {trips.map((elem, index)=>{
                return(
                    <>
                        <div key={index} className='item'>
                            <h2 className='text-white'>{elem.travel}</h2>
                            <h3 className='text-white'>Data inizio {elem.travelInfo.dateStart}</h3>
                            <h3 className='text-white'>Data fine {elem.travelInfo.dateEnd}</h3>
                            <p className='text-white'>Descrizione: {elem.travelInfo.description}</p>
                            <img className='w-25' src={elem.travelInfo.travelImg} alt={elem.travel}/>
                            <ul>
                                {Array(elem.numberOfDays).fill().map((_, dayIndex) => (
                                    <Day key={dayIndex} {...elem} dayIndex = {dayIndex} actualDay = {getActualDay(elem.numberOfDays, elem.travelInfo.dateStart, dayIndex)}/>
                                ))}
                            </ul>
                        </div>
                    </>
                    )
            })}
        </>
            
    )
}

export default Trips
