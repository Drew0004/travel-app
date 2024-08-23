const ValidateStopForm = (formData) => {
    const errors = {};
    const { stopName, stopDescription, stopImg } = formData;

    if (!stopName.value.trim()) {
        errors.stopName = "Il nome del viaggio è obbligatorio.";
    } else if (stopName.value.trim().length < 3) {
        errors.stopName = "Il nome del viaggio deve essere almeno di 3 caratteri.";
    }

    if (!stopDescription.value.trim()) {
        errors.stopDescription = "La descrizione del viaggio è obbligatoria.";
    }else if(stopDescription.value.trim().length < 3){
        errors.stopDescription = 'La descrizione deve essere almeno di 3 caratteri.'
    }
    if (!stopImg.files || stopImg.files.length === 0) {
        errors.stopImg = "L'immagine è obbligatoria.";
    } else {
        const allowedExtensions = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedExtensions.includes(stopImg.files[0].type)) {
            errors.stopImg = "L'immagine deve essere di tipo JPEG, PNG o GIF.";
        }
    }

    return errors;
};

export default ValidateStopForm