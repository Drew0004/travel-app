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
        <div className="card col-lg-5 col-12 my-5 my-md-3 m-lg-0 rounded-5 secondary-green-bg overflow-hidden border-none">

            {updatedStop.stopImg && <img className='card-img-top custom-max-height object-fit-cover' src={updatedStop.stopImg} alt={updatedStop.stopName} />}
            
            <div className="card-body p-4">
                <h3 className="card-title main-green fw-bold">{updatedStop.stopName}</h3>
                <div className="custom-scroll my-3">
                    <p className="card-text text-white">{updatedStop.stopDescription}</p>
                    {updatedStop.stopNotes && <p className='card-text text-white mt-2'>Note: {updatedStop.stopNotes}</p>}
                </div>
                <div>
                    {
                        Array.from({ length: 5 }).map((_, index) => (
                            index < updatedStop.stopRanking ? <PiStarFourFill className='main-green fs-5' key={index} /> : <PiStarFour className='main-green fs-5' key={index} />
                        ))
                    }
                </div>

                <div className="row g-0 justify-content-between align-items-center">
                    <div className="col-6">
                        <button onClick={() => setRankingInput(!rankingInput)} className='ranking-btn px-3 py-1 mb-3 my-3'>
                            <span>Modifica Voto</span>
                        </button>
                        {rankingInput && 
                            <form onSubmit={editRanking}>
                                <input className='w-50 rounded-5 px-2' style={{ border: 'none' }} type="number" name="stopRanking" defaultValue={updatedStop.stopRanking || 0} min="0" max="5" />
                                <button className='btn-unstyled'><i className="fa-solid fa-check main-green"></i></button>
                                <button onClick={()=>{setRankingInput(false)}} className='ms-2 btn-unstyled'><i className="fa-solid fa-x main-green"></i></button>
                            </form>
                        }
                    </div>
                    <div className="col-6">
                        <button onClick={() => setOpenInput(!openInput)} className='add-note-btn px-3 py-1 mb-3 my-3'>
                            <span>Aggiungi Nota</span>
                        </button>
                        {openInput && 
                            <form onSubmit={addNotes}>
                                <input className='w-50 rounded-5 px-2' style={{ border: 'none' }} type='text' name='note' placeholder='Aggiungi una nota...' />
                                <button className='btn-unstyled'><i className="fa-solid fa-check main-green"></i></button>
                                <button onClick={()=>{setOpenInput(false)}} className='ms-2 btn-unstyled'><i className="fa-solid fa-x main-green"></i></button>
                            </form>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Stop;




