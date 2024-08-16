import { addDays, format, parse } from 'date-fns';

const getActualDay = (numberOfDays, startDate, index) => {
    const start = parse(startDate, 'dd/MM/yyyy', new Date());
    
    const dates = [];
    for (let i = 0; i < numberOfDays; i++) {
        const newDate = addDays(start, i);
        const formattedDate = format(newDate, 'dd/MM/yyyy');
        dates.push(formattedDate);
    }

    return dates[index];
}

export default getActualDay;
