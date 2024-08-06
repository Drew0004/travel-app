import React, { useState } from 'react';

const Stop = ({ singleStop }) => {

    const [openInput, setOpenInput] = useState(false)
    const [updatedStop, setUpdatedStop] = useState(singleStop)

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
        </div>
    );
};

export default Stop;

