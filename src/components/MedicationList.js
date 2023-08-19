// MedicationList.js
import React from "react";
import "../styles/MedicationList.css";

const MedicationList = ({ medications, removeMedication }) => {
  return (
    <div className="medication-list">
      <h2>Medications</h2>
      <ul>
        {medications.map((medication) => (
          <li key={medication.id}>
            {medication.name}
            <button onClick={() => removeMedication(medication.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;
