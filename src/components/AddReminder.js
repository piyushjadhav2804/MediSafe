import React, { useState } from "react";
import "../styles/AddMedicationForm.css";

const AddReminder = ({ addReminder }) => {
  const [reminder, setReminder] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (reminder.trim() !== "") {
      AddReminder(addReminder);
      setReminder("");
    }
  }

  return (
    <div className="add-medication-form">
      <h2>Add Reminder</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Reminder text"
          value={reminder}
          onChange={(event) => setReminder(event.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddReminder;
