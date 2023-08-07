import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import axios from "axios";
axios.defaults.withCredentials = true;
const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const sendLogoutReq = async () => {
    const res = await axios.post("http://localhost:5000/api/logout", null, {
      withCredentials: true,
    });
    if (res.status == 200) {
      return res;
    }
    return new Error("Unable TO Logout. Please try again");
  };
  const handleLogout = () => {
    sendLogoutReq().then(() => dispatch(authActions.logout()));
  };

  return (
    <header className="header">
      <div className="left">
        <h1>Projer Company</h1>
      </div>
      <div className="right">
        <ul>
          {!isLoggedIn && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li onClick={handleLogout}>
              <Link to="/">Logout</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
