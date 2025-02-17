import React from "react";
import Home from "./components/Home";
import QuestionPapers from "./components/QuestionPapers";
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
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
