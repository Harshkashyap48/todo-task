import React, { useState } from "react";
import "./TaskList.css";
import repostImage from './repost.png';

function TaskList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    { text: "Buy groceries", completed: false },
    { text: "Finish project report", completed: false },
  ]);

  // State to manage which task is being edited
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Function to add a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { text: newTask.trim(), completed: false, important: false },
      ]);
      setNewTask("");
    }
  };

  // Function to toggle task completion
  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Function to toggle task importance
  const handleToggleImportant = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, important: !task.important } : task
    );
    setTasks(updatedTasks);
  };

  // Function to start editing a task
  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index].text);
  };

  // Function to save the edited task
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
      <div id= "task-handle">
      <div className="task-input">
                <input type="text" placeholder="Add A Task" />
                <div className="text-upper">
                <div className="icons">
                    <span role="img" aria-label="notification">🔔</span>
                    <img src={repostImage} alt="Description" width={15} />
                    <span role="img" aria-label="calendar">📅</span>
                </div>
                <button className="add-task-btn">ADD TASK</button>
            </div>
           
            </div>
            </div>
      <ul className="tasks">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            {editingIndex === index ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <p className="task-list">{task.text}</p>
            )}
            {task.important && <span className="important-task">★</span>}
            {editingIndex === index ? (
              <button
                className="save-btn"
                onClick={() => handleSaveEdit(index)}
              >
                Save
              </button>
            ) : (
              <button
                className="edit-btn"
                onClick={() => handleEditTask(index)}
              >
                Edit
              </button>
            )}
            <button
              className="important-btn"
              onClick={() => handleToggleImportant(index)}
            >
              {task.important ? "Unmark Important" : "Mark Important"}
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
