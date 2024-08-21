import React, { useState, useEffect } from 'react';
import { PiStarFourFill, PiStarFour } from "react-icons/pi";

const Stop = ({ singleStop }) => {
    const [openInput, setOpenInput] = useState(false);
    const [rankingInput, setRankingInput] = useState(false);

    const [updatedStop, setUpdatedStop] = useState(() => {
        const savedStop = localStorage.getItem(`singleStop-${singleStop.stopName}`);
        return savedStop ? JSON.parse(savedStop) : singleStop;
    });

    useEffect(() => {
        localStorage.setItem(`singleStop-${singleStop.stopName}`, JSON.stringify(updatedStop));
    }, [updatedStop]);

    const addNotes = (e) => {
        e.preventDefault();
        const newNote = e.target.note.value.trim();
        
        if (newNote.length >= 3) {
            setUpdatedStop(prev => ({
                ...prev,
                stopNotes: newNote
            }));
            e.target.note.value = '';
            setOpenInput(false);
        }
    };

    const editRanking = (e) => {
        e.preventDefault();
        const newRanking = parseInt(e.target.stopRanking.value, 10);
        
        if (!isNaN(newRanking)) {
            setUpdatedStop(prev => ({
                ...prev,
                stopRanking: newRanking
            }));
            setRankingInput(false);
        }
    };

    return (
        <div className='text-white'>
            {updatedStop.stopImg && <img className='w-25' src={updatedStop.stopImg} alt={updatedStop.stopName} />}
            <h3>Ciao sono la tappa: {updatedStop.stopName}</h3>
            <h5>Coordinate: {updatedStop.lat}, {updatedStop.lng}</h5>
            <h6>Ranking: {updatedStop.stopRanking}</h6>
            <button onClick={() => setRankingInput(!rankingInput)} className='btn btn-warning'>Modifica Voto</button>
            {rankingInput && 
                <form onSubmit={editRanking}>
                    <input type="number" name="stopRanking" defaultValue={updatedStop.stopRanking || 0} min="0" max="5" />
                    <button className='btn btn-secondary'>Invia</button>
                </form>
            }
            <button onClick={() => setOpenInput(!openInput)} className='btn btn-primary my-2'>Aggiungi Nota</button>
            {openInput && 
                <form onSubmit={addNotes}>
                    <input type='text' name='note' placeholder='Aggiungi una nota...' />
                    <button className='btn btn-success'>Invia</button>
                </form>
            }
            {updatedStop.stopNotes && <p>Note: {updatedStop.stopNotes}</p>}
            {
                Array.from({ length: 5 }).map((_, index) => (
                    index < updatedStop.stopRanking ? <PiStarFourFill key={index} /> : <PiStarFour key={index} />
                ))
            }
        </div>
    );
};

export default Stop;




