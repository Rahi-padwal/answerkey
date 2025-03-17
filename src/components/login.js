import React, { useState } from "react";
import "./login.css"; 

const LoginModal = ({ isOpen, onLogin }) => {
  const [email, setEmail] = useState("");

  if (!isOpen) return null; // Don't render if modal is closed

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.endsWith("@cumminscollege.in")) {
      alert("Only @cumminscollege.in emails are allowed.");
      return;
    }
    onLogin(); // ✅ Calls login function in App.js
  };

  return (
    <div className="login-modal">
      <div className="login-box">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <p>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></p>
          <button type="submit" className="login-submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
