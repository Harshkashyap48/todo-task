import React, { useState } from "react";
import "./TaskDetails.css";

function TaskDetails() {
  const [steps, setSteps] = useState([]);
  const [reminder, setReminder] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [repeat, setRepeat] = useState(false);
  const [notes, setNotes] = useState("");

  // Function to add a step
  const handleAddStep = () => {
    const step = prompt("Enter step:");
    if (step) {
      setSteps([...steps, step]);
    }
  };

  // Function to set a reminder
  const handleSetReminder = () => {
    const reminderDate = prompt(
      "Enter reminder date and time (e.g., 2024-09-01 09:00):"
    );
    if (reminderDate) {
      setReminder(reminderDate);
    }
  };

  // Function to add a due date
  const handleAddDueDate = () => {
    const dueDate = prompt("Enter due date (e.g., 2024-09-01):");
    if (dueDate) {
      setDueDate(dueDate);
    }
  };

  // Function to toggle repeat
  const handleToggleRepeat = () => {
    setRepeat(!repeat);
  };

  // Function to add notes
  const handleAddNotes = () => {
    const note = prompt("Enter notes:");
    if (note) {
      setNotes(note);
    }
  };

  return (
    <div className="task-details">
      <ul className="details-options">
        <li onClick={handleAddStep}>Add Step</li>
        <li onClick={handleSetReminder}>Set Reminder</li>
        <li onClick={handleAddDueDate}>Add Due Date</li>
        <li onClick={handleToggleRepeat}>
          {repeat ? "Repeat: On" : "Repeat: Off"}
        </li>
        <li onClick={handleAddNotes}>Add Notes</li>
      </ul>

      {/* Displaying the added details */}
      <div className="task-detail-info">
        {steps.length > 0 && (
          <div>
            <h4>Steps:</h4>
            <ul>
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}
        {reminder && (
          <div>
            <h4>Reminder:</h4>
            <p>{reminder}</p>
          </div>
        )}
        {dueDate && (
          <div>
            <h4>Due Date:</h4>
            <p>{dueDate}</p>
          </div>
        )}
        <div>
          <h4>Repeat:</h4>
          <p>{repeat ? "Yes" : "No"}</p>
        </div>
        {notes && (
          <div>
            <h4>Notes:</h4>
            <p>{notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskDetails;
