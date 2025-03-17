import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import QuestionPapers from "./components/QuestionPapers";
import AboutMe from "./components/AboutMe";
import LoginModal from "./components/login"; // ✅ Import LoginModal
import "./App.css";

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWebsite, setShowWebsite] = useState(true); // ✅ Show website for first 5 sec

  useEffect(() => {
    // ✅ Show website for 5 seconds before showing login modal
    const timer = setTimeout(() => {
      setShowWebsite(false); // Hide website
      setLoginOpen(true); // Show login modal
    }, 5000); // **5 seconds delay**

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  // ✅ Handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoginOpen(false); // ✅ Close login modal
    setShowWebsite(true); // ✅ Show website after login
  };

  return (
    <div>
      {/* ✅ Show login modal after 5 seconds */}
      {isLoginOpen && !isLoggedIn && (
        <LoginModal isOpen={isLoginOpen} onLogin={handleLogin} />
      )}

      {/* ✅ Show website for first 5 seconds or after login */}
      {showWebsite || isLoggedIn ? (
        <>
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
              </ul>
            </div>
          </nav>

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
        </>
      ) : null}
    </div>
  );
}

// ✅ Smooth Scrolling Function
const smoothScroll = (event, targetId) => {
  event.preventDefault();
  const section = document.getElementById(targetId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default App;
