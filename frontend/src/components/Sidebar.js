import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="sidebar">
      <ul>
        <li className="userName">
          {user ? `Welcome ${user.name}` : "Welcome"}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
