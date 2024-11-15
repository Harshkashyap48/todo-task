import React, { useState } from "react";
import "./TaskDetails.css";

function TaskDetails() {
  const [steps, setSteps] = useState([]);
  const [reminder, setReminder] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [repeat, setRepeat] = useState(false);
  const [notes, setNotes] = useState("");

 
  const handleAddStep = () => {
    const step = prompt("Enter step:");
    if (step) {
      setSteps([...steps, step]);
    }
  };

 
  const handleSetReminder = () => {
    const reminderDate = prompt(
      "Enter reminder date and time (e.g., 2024-09-01 09:00):"
    );
    if (reminderDate) {
      setReminder(reminderDate);
    }
  };


  const handleAddDueDate = (e) => {
    setDueDate(e.target.value); 
  };


  const handleToggleRepeat = () => {
    setRepeat(!repeat);
  };


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
        <hr />
        <li onClick={handleSetReminder}>Set Reminder</li>
        <hr />
        <li>
          <label>
            Add Due Date:
            <input
              type="date"
              value={dueDate || ""}
              onChange={handleAddDueDate}
              className="date-input"
            />
          </label>
        </li>
        <hr />
        <li onClick={handleToggleRepeat}>
          {repeat ? "Repeat: On" : "Repeat: Off"}
        </li>
        <hr />
        <li onClick={handleAddNotes}>Add Notes</li>
        <hr />
      </ul>

    
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
