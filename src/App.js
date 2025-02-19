import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import QuestionPapers from "./components/QuestionPapers";
import AboutMe from "./components/AboutMe";
import LoginModal from "./components/login"; // ✅ Import LoginModal
import "./App.css";

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Auto-show login modal after 7 seconds (only if not logged in)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoggedIn) {
        setLoginOpen(true);
      }
    }, 1000);  // **7 seconds timer**

    return () => clearTimeout(timer); // Cleanup function
  }, [isLoggedIn]); // ✅ Runs only if `isLoggedIn` changes

  // ✅ Handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoginOpen(false);  // ✅ Close login modal
  };

  return (
    <div>
      {/* ✅ Show Login Modal if user is not logged in */}
      {isLoginOpen && !isLoggedIn && (
        <LoginModal isOpen={isLoginOpen} onLogin={handleLogin} onClose={() => setLoginOpen(false)} />
      )}

      {/* ✅ Show Website only if logged in */}
      {!isLoginOpen && isLoggedIn && (
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
      )}
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