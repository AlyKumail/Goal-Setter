import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import { logout, reset } from "../features/auth/authSlice";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="sidebar">
      <ul>
        <li className="userName">
          {user ? `Welcome ${user.name}` : "Welcome"}
        </li>
        <li>
          <button className="btn logout" onClick={onLogoutHandler}>
            <FaSignInAlt></FaSignInAlt>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
