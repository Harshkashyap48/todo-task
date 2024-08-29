import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";
import "./Sidebar.css";

function Sidebar() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img
          src={require("../user1.jpeg")} // Path to your image
          alt="Profile"
          className="profile-img"
        />
        <p className="profile-name">Hey, {username}</p>
      </div>
      <div className="menu">
        <ul>
          <li className="active">All Tasks</li>
          <li>Today</li>
          <li>Important</li>
          <li>Planned</li>
          <li>Assigned to me</li>
          <li>Add List</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
