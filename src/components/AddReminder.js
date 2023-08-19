import React, { useState } from "react";
import "../styles/AddMedicationForm.css";

const AddReminder = ({ addReminder }) => {
  const [reminderText, setReminderText] = useState("");
  const [reminderTime, setReminderTime] = useState(""); // Store reminder time

  function handleSubmit(event) {
    event.preventDefault();

    if (reminderText.trim() !== "" && reminderTime) {
      addReminder(reminderText, new Date(reminderTime).toISOString());
      setReminderText("");
      setReminderTime("");
    }
  }

  return (
    <div className="add-medication-form">
      <h2>Add Reminder</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Reminder text"
          value={reminderText}
          onChange={(event) => setReminderText(event.target.value)}
        />
        <input
          type="datetime-local" // Use datetime-local input type
          placeholder="Reminder time"
          value={reminderTime}
          onChange={(event) => setReminderTime(event.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddReminder;
