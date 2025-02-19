import React, { useState } from "react";
import "./login.css"; 

const LoginModal = ({ isOpen, onLogin, onClose }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null; // Don't render if modal is closed

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.endsWith("@cumminscollege.in")) {
      setError("Only Cummins college students are allowed.");
      return;
    }
    onLogin(); // ✅ Calls login function in App.js
  };

  return (
    <div className="login-modal">
      <div className="login-box">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Register</h2>
        
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
          
          <button type="submit" className="login-submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;