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
  const [medications, setMedications] = useState([
    { id: 1, name: "Medication A" },
    { id: 2, name: "Medication B" },
    { id: 3, name: "Medication C" },
  ]);

  const [reminders, setReminders] = useState([
    { id: 1, text: "Reminder A" },
    { id: 2, text: "Reminder B" },
    { id: 3, text: "Reminder C" },
  ]);

  const addMedication = (medicationName) => {
    const newMedication = {
      id: new Date().getTime(),
      name: medicationName,
    };
    setMedications([...medications, newMedication]);
  };

  const removeMedication = (medicationId) => {
    const updatedMedications = medications.filter(
      (medication) => medication.id !== medicationId
    );
    setMedications(updatedMedications);
  };

  const addReminder = (reminderText) => {
    const newReminder = {
      id: new Date().getTime(),
      text: reminderText,
    };
    setReminders([...reminders, newReminder]);
  };

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
