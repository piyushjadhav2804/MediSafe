import AddMedicationForm from "./AddMedicationForm";
import Header from "./Header";
import MedicationList from "./MedicationList";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import Reminder from "./Reminder";
import AddReminder from "./AddReminder";
import Home from "./Home";

function App() {
  const [medications, setMedications] = useState([
    { id: 1, name: "Medication A" },
    { id: 2, name: "Medication B" },
    { id: 3, name: "Medication C" },
  ]);

  const [reminders, setReminders] = useState([
    { id: 1, name: "Medication A" },
    { id: 2, name: "Medication B" },
    { id: 3, name: "Medication C" },
  ]); // State for reminders

  const addMedication = (medicationName) => {
    const newMedication = {
      id: new Date().getTime(), // You can use a better ID generation method
      name: medicationName,
    };
    setMedications([...medications, newMedication]);
  };

  // Function to add reminders
  const addReminder = (reminderText) => {
    const newReminder = {
      id: new Date().getTime(),
      text: reminderText,
    };
    setReminders([...reminders, newReminder]);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/medications" element={<MedicationList medications={medications}/>} />
          <Route path="/add-medication" element={<AddMedicationForm addMedication={addMedication} />} />
          <Route path="/reminders" element={<Reminder reminder={reminders}/>} />
          <Route path="/add-reminder" element={<AddReminder addReminder={addReminder} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;