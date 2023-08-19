import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Medicine Reminder App</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/medications">Medications</Link>
          </li>
          <li className="nav-item">
            <Link to="/add-medication">Add Medication</Link>
          </li>
          <li className="nav-item">
            <Link to="/reminders">Reminders</Link>
          </li>
          <li className="nav-item">
            <Link to="/add-reminder">Add Reminder</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
