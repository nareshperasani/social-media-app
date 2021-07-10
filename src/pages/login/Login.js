import React from "react";
import "./Login.css";

function Login() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
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
          <form className="loginBox" onSubmit={handleClick}>
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
