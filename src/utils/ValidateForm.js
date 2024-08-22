const ValidateForm = (formData) => {
    const errors = {};
    const { travelName, dateStart, dateEnd, description, travelImg } = formData;

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
    if (!travelImg.files || travelImg.files.length === 0) {
        errors.travelImg = "L'immagine è obbligatoria.";
    } else {
        const allowedExtensions = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedExtensions.includes(travelImg.files[0].type)) {
            errors.travelImg = "L'immagine deve essere di tipo JPEG, PNG o GIF.";
        }
    }

    return errors;
};

export default ValidateForm