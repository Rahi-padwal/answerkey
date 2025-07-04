import React, { useState, useEffect } from "react";
import "./login.css";

const LoginModal = ({ isOpen, onLogin }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Load saved values on component mount
    useEffect(() => {
        const savedName = localStorage.getItem("name");
        const savedEmail = localStorage.getItem("email");
        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);
    }, []);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.endsWith("@cumminscollege.in")) {
            alert("Only Cummins college students are allowed to access this website.");
            return;
        }

        try {
            const response = await fetch('https://answerkey.onrender.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            let data;
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                throw new Error('Non-JSON response received from server');
            }

            if (response.ok || response.status === 409) {
                console.log('Registration successful:', data);

                // Save to localStorage
                localStorage.setItem("name", name);
                localStorage.setItem("email", email);

                onLogin(); // Notify parent
                setName("");
                setEmail("");
            } else {
                console.error('Registration failed:', data);
                alert(data.message || 'Something went wrong');
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
                    <button type="submit" className="login-submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
