import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import QuestionPapers from "./components/QuestionPapers";
import AboutMe from "./components/AboutMe";
import LoginModal from "./components/login"; // Import LoginModal
import "./App.css";

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    // Auto-show login modal after 5 seconds
    const timer = setTimeout(() => {
      setLoginOpen(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1>Answer Key</h1>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <a href="#home" onClick={(e) => smoothScroll(e, "home")}>Home</a>
            </li>
            <li>
              <a href="#question-papers" onClick={(e) => smoothScroll(e, "question-papers")}>
                Question Papers
              </a>
            </li>
            <li>
              <a href="#about-me" onClick={(e) => smoothScroll(e, "about-me")}>About Me</a>
            </li>
            <li>
              <a href="login" onClick={() => setLoginOpen(true)}>Login</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />

      {/* Page Sections */}
      <section id="home">
        <Home />
      </section>
      <section id="question-papers">
        <QuestionPapers />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
    </div>
  );
}

// Smooth Scrolling Function
const smoothScroll = (event, targetId) => {
  event.preventDefault(); // Prevent default jump
  const section = document.getElementById(targetId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default App;
