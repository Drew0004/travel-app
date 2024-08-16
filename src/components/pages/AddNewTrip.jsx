import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import { format, differenceInDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const AddNewTrip = () => {
    const { trips, setTrips } = useContext(AppContext);
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
        const { travelName, dateStart, dateEnd, description, numberOfDays } = e.target;

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
        } else {
            const updatedTrips = [...trips, trip];
            setTrips(updatedTrips);
        }
        navigate('/')
    };

    return (
        <form onSubmit={handleNewTrip}>
            <input type="text" name="travelName" placeholder='Nome' required />
            <input type="date" name="dateStart" required />
            <input type="date" name="dateEnd" required />
            <textarea name="description" placeholder='Descrizione' required></textarea>
            <input type="file" name='travelImg' />
            <button type="submit">Invia</button>
        </form>
    );
}

export default AddNewTrip;





