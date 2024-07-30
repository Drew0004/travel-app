import React, {useEffect, useState, useContext} from 'react'
import data from '../assets/storage/data'
import Day from './Day'
import getActualDay from '../utils/DateGenerator'

export const AppContext = React.createContext()

const Trips = () => {

    const [trips, setTrips] = useState(data)

    return (
        <>
            <AppContext.Provider value={{trips}}>

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
            </AppContext.Provider>
        </>
            
    )
}

export default Trips
