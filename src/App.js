import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom"; // ✅ Import useLocation
import Home from "./components/Home";
import QuestionPapers from "./components/QuestionPapers";
import FirstYear from "./components/fy";
import SecondYear from "./components/sy";
import AboutMe from "./components/AboutMe";
import LoginModal from "./components/login";
import "./App.css";

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWebsite, setShowWebsite] = useState(true);

  const location = useLocation(); // ✅ Get current page location

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWebsite(false);
      setLoginOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoginOpen(false);
    setShowWebsite(true);
  };

  // ✅ Smooth Scroll Function (Brings back scrolling)
  const smoothScroll = (event, targetId) => {
    event.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {isLoginOpen && !isLoggedIn && (
        <LoginModal isOpen={isLoginOpen} onLogin={handleLogin} />
      )}

      {showWebsite || isLoggedIn ? (
        <>
          {/* ✅ Navigation Bar */}
          <nav className="navbar">
            <div className="navbar-left">
              <h1>Answer Key</h1>
            </div>
            <div className="navbar-right">
              <ul>
                {/* ✅ If on Home Page → Use Smooth Scrolling, Else → Use Routing */}
                {location.pathname === "/" ? (
                  <>
                    <li><a href="#home" onClick={(e) => smoothScroll(e, "home")}>Home</a></li>
                    <li><a href="#question-papers" onClick={(e) => smoothScroll(e, "question-papers")}>Question Papers</a></li>
                    <li><a href="#about-me" onClick={(e) => smoothScroll(e, "about-me")}>About Me</a></li>
                  </>
                ) : (
                  <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/question-papers">Question Papers</Link></li>
                    <li><Link to="/about-me">About Me</Link></li>
                  </>
                )}
              </ul>
            </div>
          </nav>

          {/* ✅ Handle Smooth Scrolling Sections */}
          {location.pathname === "/" && (
            <>
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

          {/* ✅ Define Routes for Separate Pages */}
          <Routes>
            <Route path="/question-papers" element={<QuestionPapers />} />
            <Route path="/first-year" element={<FirstYear />} />
            <Route path="/second-year" element={<SecondYear />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="*" element={<h2>Page Not Found</h2>} />
            <Route path="*" element={<h2 style={{ color: "white", textAlign: "center" }}>404 - Page Not Found</h2>} />
          </Routes>
        </>
      ) : null}
    </div>
  );
}

export default App;
