import React from "react";
import "../styles/MedicationList.css";

const Reminder = ({ reminder }) => {
  return (
    <div className="medication-list">
      <h2>Reminder</h2>

      {console.log("reminder: ", reminder)}
      <ul>
        {reminder.map((reminder) => (
          <li key={reminder.id}>{reminder.name}</li>
        ))}
      </ul>

      
    </div>
  );
};

export default Reminder;
