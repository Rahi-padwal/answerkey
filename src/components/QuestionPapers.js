import React from "react";
import { useNavigate } from "react-router-dom";
import "./QuestionPapers.css";

function QuestionPapers() {
  const navigate = useNavigate();

  return (
    <section className="question-papers-section">
      {/* ✅ Added Heading */}
      <h2 className="qp-heading">Previous Year Question Papers</h2>

      <div className="qp-cards-container">
        <div className="qp-card" onClick={() => navigate("/first-year")}>
          <div className="qp-content">
            <h3>First Year</h3>
            <p>Explore previous year papers for the first year.</p>
          </div>
        </div>

        <div className="qp-card" onClick={() => navigate("/second-year")}>
          <div className="qp-content">
            <h3>Second Year</h3>
            <p>Access organized question papers for the second year.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestionPapers;
