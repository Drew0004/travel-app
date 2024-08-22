import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import { format, differenceInDays } from 'date-fns';
import { useNavigate, Link } from 'react-router-dom';
import ValidateForm from '../../utils/ValidateForm'

const AddNewTrip = () => {
    const { trips, setTrips } = useContext(AppContext);
    const [errors, setErrors] = useState({});
    const [newTrip, setNewTrip] = useState({
        travel: '',
        travelInfo: {
            dateStart: '',
            dateEnd: '',
            description: '',
            travelImg: '',
        },
        numberOfDays: 0,
        stops: []
    });

    const navigate = useNavigate();

    const handleNewTrip = async (e) => {
        e.preventDefault();
        
        const formData = e.target;
        const formErrors = ValidateForm(formData);

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const { travelName, dateStart, dateEnd, description } = formData;

        const startDate = new Date(dateStart.value);
        const endDate = new Date(dateEnd.value);

        const calculatedNumberOfDays = differenceInDays(endDate, startDate) + 1;
        
        const trip = {
            travel: travelName.value,
            travelInfo: {
                dateStart: format(startDate, 'dd/MM/yyyy'),
                dateEnd: format(endDate, 'dd/MM/yyyy'),
                description: description.value,
                travelImg: ''
            },
            numberOfDays: calculatedNumberOfDays,
            stops: []
        };
        

        const stopImgFile = e.target.travelImg.files[0];

        if (stopImgFile) {
            const reader = new FileReader();

            reader.onloadend = () => {
                trip.travelInfo.travelImg = reader.result;
                const updatedTrips = [...trips, trip];
                setTrips(updatedTrips);
            };

            reader.readAsDataURL(stopImgFile);
        }
        navigate('/')
    };

    return (
        <div className="row g-0 vh-100">
            <div className="col-6 form-img-background d-flex justify-content-center align-items-center p-5">
                <h1 className='main-green fw-bold'>Aggiungi un nuovo Viaggio alla tua Avventura!</h1>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
                <form className='row g-0 p-5' onSubmit={handleNewTrip}>

                    <label className='my-label mb-3' htmlFor="travelName">Nome del Viaggio</label>
                    <input className='mb-3 rounded-5 px-4 py-2 my-input' type="text" name="travelName" placeholder='Nome' required />
                    {errors.travelName && <p className="text-danger">{errors.travelName}</p>}

                    <label className='my-label mb-3' htmlFor="dateStart">Data di inizio</label>
                    <input className='mb-3 rounded-5 px-4 py-2 my-input' type="date" name="dateStart" required />
                    {errors.dateStart && <p className="text-danger">{errors.dateStart}</p>}

                    <label className='my-label mb-3' htmlFor="dateEnd">Data di fine</label>
                    <input className='mb-3 rounded-5 px-4 py-2 my-input' type="date" name="dateEnd" required />
                    {errors.dateEnd && <p className="text-danger">{errors.dateEnd}</p>}

                    <label className='my-label mb-3' htmlFor="description">Descrizione del viaggio</label>
                    <textarea className='mb-3 rounded-5 px-4 py-2 my-input' name="description" placeholder='Descrizione' required></textarea>
                    {errors.description && <p className="text-danger">{errors.description}</p>}

                    <label className='my-label mb-3' htmlFor="travelImg">Immagine</label>
                    <input className='mb-3 form-control rounded-5 my-input' type="file" name='travelImg' required />
                    {errors.travelImg && <p className="text-danger">{errors.travelImg}</p>}

                    <div className="col-12 d-flex justify-content-around align-items-center my-4">
                        <Link className='text-decoration-none my-secondary-btn px-4 py-2' to={'/'}>
                            <span>Annulla</span>
                        </Link>
                        <button className='my-main-btn px-5 py-2' type="submit" style={{ border: 'none' }}>
                            <span>Invia</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddNewTrip;




