import React, { useState } from "react";
import "./TaskList.css";
import { MdStar, MdStarBorder, MdDelete, MdEdit, MdSave } from "react-icons/md"; // Import the icons from react-icons

function TaskList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    { text: "Buy groceries", completed: false, important: false },
    { text: "Finish project report", completed: false, important: false },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      const updatedTasks = [
        ...tasks,
        { text: newTask.trim(), completed: false, important: false },
      ];
      setTasks(updatedTasks);
      setNewTask("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleImportant = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, important: !task.important } : task
    );
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index].text);
  };

  const handleSaveEdit = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editingText } : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div className="task-list">
      <h2>To Do</h2>
      <div id="task-handle">
        <div className="task-input">
          <input
            type="text"
            placeholder="Add A Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <div className="text-upper">
            <div className="icons">
              <span role="img" aria-label="notification">🔔</span>
              <span role="img" aria-label="calendar">📅</span>
            </div>
            <button className="add-task-btn" onClick={handleAddTask}>
              ADD TASK
            </button>
          </div>
        </div>
      </div>

      <div className="task-list-section">
        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(index)}
              />
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <p
                  className="task-text"
                  onClick={() => handleToggleComplete(index)}
                >
                  {task.text}
                </p>
              )}
              <div className="task-actions">
               
              <span
            className="important-btn"
            onClick={() => handleToggleImportant(index)}
            style={{ backgroundColor: 'transparent', border:"none" , outline: 'none' }}
              >
            {task.important ? (
                <MdStar size={20} color="black" className="star-icon filled"  />
              ) : (
                <MdStarBorder size={20} className="star-icon filled"  />
              )}
          
          </span>

                
                {editingIndex === index ? (
                  <button
                    className="save-btn"
                    onClick={() => handleSaveEdit(index)}
                  >
                    <MdSave size={20} />
                  </button>
                ) : (
                  <button
                    className="edit-btn"
                    onClick={() => handleEditTask(index)}
                  >
                    <MdEdit size={20} />
                  </button>
                )}

              
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTask(index)}
                >
                  <MdDelete size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
