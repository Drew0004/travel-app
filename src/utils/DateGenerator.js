import { addDays, format } from 'date-fns';


const getActualDay = (numberOfDays, startDate, index) => {
    const dates = []
    for(let i = 0; i < numberOfDays; i++){
        const newDate = addDays((new Date(startDate)).toLocaleDateString('en-GB'), i);
        dates.push(format(newDate, 'dd/MM/yyyy'));
    }
    return dates[index]
}

export default getActualDay