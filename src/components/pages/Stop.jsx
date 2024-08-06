import React, { useState, useEffect } from 'react';
import { PiStarFourFill } from "react-icons/pi";
import { PiStarFour } from "react-icons/pi";

const Stop = ({ singleStop }) => {

    const [openInput, setOpenInput] = useState(false)
    
    const [updatedStop, setUpdatedStop] = useState(()=>{
        const savedStop = localStorage.getItem(`singleStop-${singleStop.stopName}`)
        return savedStop ? JSON.parse(savedStop) : singleStop
    })

    useEffect(()=>{
        localStorage.setItem(`singleStop-${singleStop.stopName}`, JSON.stringify(updatedStop));
    }, [updatedStop])

    const addNotes = (e) => {
        e.preventDefault()

        if(e.target.note.value.trim().length >= 3){
            setUpdatedStop({
                ...singleStop,
                stopNotes: e.target.note.value
            })
            e.target.note.value = ''
            setOpenInput(false)
        }
    }

    return (
        <div className='text-white'>
            <h3>Ciao sono la tappa: {updatedStop.stopName}</h3>
            <h5>Coordinate: {updatedStop.lat}, {updatedStop.lng}</h5>
            <h6>Ranking: {updatedStop.stopRanking}</h6>
            <button onClick={()=>setOpenInput(!openInput)} className='btn btn-primary my-2'>Aggiungi Nota</button>
            {
                openInput ? 
                <form onSubmit={addNotes}>
                    <input type='text' name='note' placeholder='Aggiungi una nota...' />
                    <button className='btn btn-success'>Invia</button>
                </form>
                : null
            }
            {
                updatedStop.stopNotes ? <p>Note: {updatedStop.stopNotes}</p> : null
            }
            {
                Array.from({length: 5}).map((_, index)=>{
                    return index < updatedStop.stopRanking ? <PiStarFourFill key={index}/> : <PiStarFour key={index} />
                })
            }
        </div>
    );
};

export default Stop;

