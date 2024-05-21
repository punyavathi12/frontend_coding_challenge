import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './Login.css'; // Import CSS file

function Login() {
  // Initialize state for user ID, password, and result message
  const [uid, setUserId] = useState("punya");
  const [pwd, setPassword] = useState("punya123");
  const [result, setResult] = useState("");

  // Hooks for navigation and location
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle login button click
  function loginButton_click() {
    // Get the return URL from the query string, default to home page
    const queryString = location.search;
    let strReturnUrl = new URLSearchParams(queryString).get('returnUrl');
    if (strReturnUrl == null) {
      strReturnUrl = "/";
    }

    // Verify static credentials
    if (uid === "punya" && pwd === "punya123") {
      // Static token for demonstration purposes
      let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
      sessionStorage.setItem('user-token', token);

      // Show an alert with the token
      alert(`Login successful! Your token is: ${token}`);

      // Redirect to the return URL
      navigate(strReturnUrl);
    } else {
      // Set error message for invalid credentials
      setResult("Invalid User Id or Password");
    }
  }

  return (
    <div className="container">
      <img src='/Images/log.png' alt="Login" className="login-image" />
      <fieldset>
        <legend>User Login</legend>
        <div className="label">
          <label>User Id:</label>
          <input
            type="text"
            value={uid}
            onChange={(event) => setUserId(event.target.value)}
            className="input"
          />
        </div>
        <div className="label">
          <label>Password:</label>
          <input
            type="password"
            value={pwd}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
          />
        </div>
        <input type="button" onClick={loginButton_click} value="Login" className="button" />
        <p className="error">{result}</p>
      </fieldset>
    </div>
  );
}

export default Login;
