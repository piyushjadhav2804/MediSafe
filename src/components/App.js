//App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MedicationList from "./MedicationList";
import AddMedicationForm from "./AddMedicationForm";
import Reminder from "./Reminder";
import AddReminder from "./AddReminder";
import Home from "./Home";
import "../styles/App.css";

function App() {
  // State for medications and reminders
  const [medications, setMedications] = useState([
    { id: 1, name: "Paracetamol Dolo-650" },
    { id: 2, name: "Thyrox-25" },
    { id: 3, name: "Amoxicillin 500" },
  ]);

  const [reminders, setReminders] = useState([
    { id: 1, text: "Reminder A" },
    { id: 2, text: "Reminder B" },
    { id: 3, text: "Reminder C" },
  ]);

  // Function to add medication
  const addMedication = (medicationName) => {
    const newMedication = {
      id: new Date().getTime(),
      name: medicationName,
    };
    setMedications([...medications, newMedication]);
  };

  // Function to remove medication
  const removeMedication = (medicationId) => {
    const updatedMedications = medications.filter(
      (medication) => medication.id !== medicationId
    );
    setMedications(updatedMedications);
  };

  // Function to add reminder
  const addReminder = (reminderText) => {
    const newReminder = {
      id: new Date().getTime(),
      text: reminderText,
    };
    setReminders([...reminders, newReminder]);
  };

  // Function to remove reminder
  const removeReminder = (reminderId) => {
    const updatedReminders = reminders.filter(
      (reminder) => reminder.id !== reminderId
    );
    setReminders(updatedReminders);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/medications"
            element={
              <MedicationList
                medications={medications}
                removeMedication={removeMedication}
              />
            }
          />
          <Route
            path="/add-medication"
            element={<AddMedicationForm addMedication={addMedication} />}
          />
          <Route
            path="/reminders"
            element={
              <Reminder reminders={reminders} removeReminder={removeReminder} />
            }
          />
          <Route
            path="/add-reminder"
            element={<AddReminder addReminder={addReminder} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
