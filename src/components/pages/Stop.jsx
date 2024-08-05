import React, {useState, useEffect} from 'react'
import axios from 'axios'




const Stop = ({singleStop}) => {
    // Array di dati posizioni
    const [stopCoordinates, setStopCoordinates] = useState([])

    // Fetching dei dati
    const getData = async () =>{
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${singleStop.stopName}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
        setStopCoordinates(response.data.results)
    }
    useEffect(()=>{
        getData()
    },[])

    stopCoordinates.map((singleElem)=>{
        singleStop.lat = singleElem.geometry.location.lat
        singleStop.lng = singleElem.geometry.location.lng
    })
    

    return (
        <div className='text-white'>
            <h3>Ciao sono la tappa: {singleStop.stopName}</h3>
            <h5>Coordinate: {singleStop.lat}, {singleStop.lng}</h5>
        </div>
  )
}

export default Stop
