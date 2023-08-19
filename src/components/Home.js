// Home.js
import React from "react";
import "../styles/Home.css";

function Home({ medications, reminders }) {
  const currentTime = new Date().getTime();

  const upcomingReminders = reminders.filter(
    (reminder) => new Date(reminder.time).getTime() > currentTime
  );

  return (
    <div className="home-container">
      <h2>Welcome to the Home Page</h2>

      <div className="card upcoming-reminders">
        <h3>Upcoming Reminders:</h3>
        <ul className="reminders-list">
          {upcomingReminders.length === 0 ? (
            <p>No upcoming reminders.</p>
          ) : (
            upcomingReminders.map((reminder) => (
              <li key={reminder.id}>
                <p>
                  <strong>Reminder:</strong> {reminder.text}
                </p>
                <p>
                  <strong>Time:</strong>{" "}
                  {new Date(reminder.time).toLocaleString()}
                </p>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="card current-medications">
        <h3>Current Medications:</h3>
        <ul className="medications-list">
          {medications.map((medication) => (
            <li key={medication.id}>
              {medication.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
