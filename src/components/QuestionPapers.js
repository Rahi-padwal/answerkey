import React, { useState } from "react";
import "./QuestionPapers.css";

const subjects = [
  { name: "LAUC", year: "First Year" },
  { name: "PHYSICS", year: "First Year" },
  { name: "MVC", year: "First Year" },
  { name: "CHEMISTRY", year: "First Year" },
  { name: "BEEE", year: "First Year" },
  { name: "MATHS", year: "Second Year" },
  { name: "ELECTRONICS", year: "Second Year" },
  { name: "NETWORKS", year: "Second Year" },
  { name: "DIGITAL", year: "Second Year" },
  { name: "AI", year: "Second Year" },
];

const tabs = ["All", "First Year", "Second Year"];

function QuestionPapers() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSubjects =
    activeTab === "All"
      ? subjects
      : subjects.filter((subject) => subject.year === activeTab);

  return (
    <section className="question-papers-section">
      <h2 className="qp-title">Last Year Question Paper</h2>

      {/* Filter Tabs */}
      <div className="tab-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Subject Grid */}
      <div className="qp-grid">
        {filteredSubjects.map((subject, index) => (
          <div key={index} className="qp-card">
            <p className="qp-subject-name">{subject.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuestionPapers;
