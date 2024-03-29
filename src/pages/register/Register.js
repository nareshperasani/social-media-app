import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Dexter</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Dexter
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="name" placeholder="Username" className="loginInput" />
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/login">
                Sign In
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
