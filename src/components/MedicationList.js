import React from "react";
import '../styles/MedicationList.css';

const MedicationList = ({ medications }) => {
  return (
    <div className="medication-list">
      <h2>Medications</h2>
      <ul>
        {medications.map((medication) => (
          <li key={medication.id}>{medication.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;
