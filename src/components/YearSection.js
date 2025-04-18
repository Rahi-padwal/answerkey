import React from "react";
import { useNavigate } from "react-router-dom";
import "./YearSection.css";

function YearSection() {
  const navigate = useNavigate();

  return (
    <div className="year-section-container">
      <div className="year-box" onClick={() => navigate("/first-year")}>First Year</div>
      <div className="year-box" onClick={() => navigate("/second-year")}>Second Year</div>

    </div>
  );
}

export default YearSection;