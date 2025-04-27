import React, { useState } from "react";
import "./QuestionPapers.css";

const subjects = [
  { name: "Comp + IT\n BSH", year: "First Year" },
  { name: "ENTC + MECH + INSTRU\n BSH", year: "First Year" },
  { name: "COMP\nSECOND YEAR", year: "Second Year" },
  { name: "IT\nSECOND YEAR", year: "Second Year" },
  { name: "ENTC\n SECOND YEAR", year: "Second Year" },
  { name: "MECH\nSECOND YEAR", year: "Second Year" },
  { name: "INSTRU\nSECOND YEAR", year: "Second Year" },
  /*{ name: "DBMS", year: "Second Year" },
  { name: "Machine Learning", year: "Second Year" },
  { name: "Operating System", year: "Second Year" },
  { name: "DSA", year: "Second Year" },
  { name: "Digital Communication", year: "Second Year" },
  { name: "Digital Electronics", year: "Second Year" },
  { name: "Digital Marketing", year: "Second Year" },
  { name: "Electronic circuit & applications", year: "Second Year" },
  { name: "Machine Learning with python", year: "Second Year" },
  { name: "SAHD", year: "Second Year" },
  { name: "Signals and System", year: "Second Year" },
  { name: "UHV", year: "Second Year" },*/
];

const tabs = ["All", "First Year", "Second Year"];

function QuestionPapers() {
  const [activeTab, setActiveTab] = useState("All");

  const firstYearSubjects = subjects.filter(
    (subject) => subject.year === "First Year"
  );
  const secondYearSubjects = subjects.filter(
    (subject) => subject.year === "Second Year"
  );

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

      {/* Subject Grids */}
      {activeTab === "All" || activeTab === "First Year" ? (
        <>
          
          <div className="qp-grid">
            {firstYearSubjects.map((subject, index) => (
              <div key={index} className="qp-card">
                <p className="qp-subject-name">{subject.name}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {activeTab === "All" || activeTab === "Second Year" ? (
        <>
         
          <div className="qp-grid">
            {secondYearSubjects.map((subject, index) => (
              <div key={index} className="qp-card">
                <p className="qp-subject-name">{subject.name}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}


export default QuestionPapers;
