import React, { useState } from "react";
import '../styles/AddMedicationForm.css';

const AddMedicationForm = ({addMedication}) => {

    const [medicationName, setMedicationName] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (medicationName.trim() !== "") {
          addMedication(medicationName);
          setMedicationName("");
        }
    }

    return(
        <div className="add-medication-form">
            <h2>Add Medication</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Medication name" value={medicationName} onChange={event => setMedicationName(event.target.value)} />
                <button type="submit">ADD</button>
            </form>
        </div>
    )
}

export default AddMedicationForm;