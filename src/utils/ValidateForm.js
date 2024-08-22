const ValidateForm = (formData) => {
    const errors = {};
    const { travelName, dateStart, dateEnd, description } = formData;

    if (!travelName.value.trim()) {
        errors.travelName = "Il nome del viaggio è obbligatorio.";
    } else if (travelName.value.trim().length < 3) {
        errors.travelName = "Il nome del viaggio deve essere almeno di 3 caratteri.";
    }

    if (!dateStart.value) {
        errors.dateStart = "La data di inizio è obbligatoria.";
    }

    if (!dateEnd.value) {
        errors.dateEnd = "La data di fine è obbligatoria.";
    } else if (new Date(dateEnd.value) < new Date(dateStart.value)) {
        errors.dateEnd = "La data di fine non può essere precedente alla data di inizio.";
    }

    if (!description.value.trim()) {
        errors.description = "La descrizione del viaggio è obbligatoria.";
    }else if(description.value.trim().length < 3){
        errors.description = 'La descrizione deve essere almeno di 3 caratteri.'
    }

    return errors;
};

export default ValidateForm