import React from "react";
import YearSection from "./YearSection";
import "./QuestionPapers.css";

function QuestionPapers() {
  return (
    <section className="question-papers-section" id="question-papers">
      <div className="year-section-container">
        {/* Add the title here */}
        <h2 className="section-title">Previous Year Question Papers</h2>
        <YearSection />
      </div>
    </section>
  );
}

export default QuestionPapers;