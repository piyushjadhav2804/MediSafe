// AddMedicationForm.js
import React, { useState } from "react";
import "../styles/AddMedicationForm.css";

const AddMedicationForm = ({ addMedication }) => {
  // State for medication name
  const [medicationName, setMedicationName] = useState("");

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    if (medicationName.trim() !== "") {
      // Call the addMedication function
      addMedication(medicationName);
      setMedicationName("");
    }
  }

  return (
    <div className="add-medication-form">
      <h2>Add Medication</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Medication name"
          value={medicationName}
          onChange={(event) => setMedicationName(event.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddMedicationForm;
