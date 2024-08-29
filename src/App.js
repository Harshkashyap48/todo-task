import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import Login from "./components/Login";
import "./App.css";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="app-container">
      <div className="main-content">
        {isAuthenticated ? (
          <>
            <Sidebar />
            <TaskList />
            <TaskDetails />
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}

export default App;
