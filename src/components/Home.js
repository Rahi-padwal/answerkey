import React from "react";
import "./Home.css";

function Home() {

  const handleButtonClick = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      <h3 className="subtitle">The key to success? Organized previous year question papers!</h3>
      <h1 className="main-title">ANSWER KEY</h1>

      {/* New Buttons */}
      <div className="home-buttons">
        <button 
          className="custom-btn" 
          onClick={(e) => handleButtonClick(e, "question-papers")}
        >
          View All Question Papers
        </button>
        <button 
          className="custom-btn" 
          onClick={(e) => handleButtonClick(e, "about-me")}
        >
          About Developer
        </button>
      </div>
    </div>
  );
}

export default Home;