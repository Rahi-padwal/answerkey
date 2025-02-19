import React, { useState } from "react";
import "./login.css";

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault(); 

    // Validate Email Domain, only cumminscollege.in are allowed.
    if (!email.endsWith("@cumminscollege.in")) {
      setError("Only @cumminscollege.in emails are allowed.");
      return; // Stop further execution
    }

    setError(""); // Clear error if validation passes
    alert("Login successful!"); // You can replace this with actual login logic
  };

  return (
    <div className="login-modal">
      <div className="login-box">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Log in</h2>
        
        <form onSubmit={handleSubmit}>
          <p>Email: 
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required 
            />
          </p>
          
          {/*Display error message if validation fails */}
          {error && <p className="error-message">{error}</p>}
          
          <button type="submit" className="login-submit">Login</button>
        </form>

        <button className="signup-btn" onClick={(e) => e.preventDefault()}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
