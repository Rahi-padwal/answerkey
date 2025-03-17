import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h3 className="subtitle">The key to success? Organized previous year question papers!</h3>
      <h1 className="main-title">ANSWER KEY</h1>

      {/* New Buttons */}
      <div className="home-buttons">
        <button className="custom-btn" onClick={() => navigate("/question-papers")}>
          View All Question Papers
        </button>
        <button className="custom-btn" onClick={() => navigate("/about-me")}>
          About Developer
        </button>
      </div>
    </div>
  );
}

export default Home;
