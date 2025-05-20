import React, { useState } from "react";
import "./login.css";

const LoginModal = ({ isOpen, onLogin }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async (e) => { // Make handleSubmit async
        e.preventDefault();
        if (!email.endsWith("@cumminscollege.in")) {
            alert("Only Cummins college students are allowed to access this website.");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:5000/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }), // Send name and email in the request body
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful:', data);
                onLogin(); // Call the login function in App.js upon successful registration
                // Optionally, you can reset the form here:
                setName("");
                setEmail("");
            } else {
                const errorData = await response.json();
                console.error('Registration failed:', errorData);
                alert(`Registration failed: ${errorData.message || 'Something went wrong'}`);
            }
        } catch (error) {
            console.error('Error sending data to server:', error);
            alert('Failed to connect to the server.');
        }
    };

    return (
        <div className="login-modal">
            <div className="login-box">
                <div className="login-header">
                    <h2>Log in</h2>
                    <div className="welcome-message">
                        (As this website contains some official documents, only Cummins college students are allowed to access this website.)
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <p>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /></p>
                    <p>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></p>
                    <button type="submit" className="login-submit">Register</button> {/* Change button text to "Register" */}
                </form>
            </div>
        </div>
    );
};

export default LoginModal;