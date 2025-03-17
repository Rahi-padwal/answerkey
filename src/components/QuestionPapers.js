import React from "react";
import { useNavigate } from "react-router-dom";
import "./QuestionPapers.css";

function QuestionPapers() {
  const navigate = useNavigate();

  return (
    <section className="question-papers-section">
      {/* ✅ Added Heading */}
      <h2 className="qp-heading">PREVIOUS YEAR QUESTION PAPERS</h2>

      <div className="qp-cards-container">
        <div className="qp-card" onClick={() => navigate("/first-year")}>
          <div className="qp-content">
            <h3>First Year</h3>
            <p>Mention the subjects of first year</p>
          </div>
        </div>

        <div className="qp-card" onClick={() => navigate("/second-year")}>
          <div className="qp-content">
            <h3>Second Year</h3>
            <p>Mention the subjects of second year.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestionPapers;
