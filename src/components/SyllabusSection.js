import React from 'react';
import './SyllabusSection.css';

const SyllabusSection = () => {
  const branches = [
    "Computer Engineering",
    "Information Technology",
    "ENTC",
    "Mechanical",
    "Instrumentation"
  ];

  return (
    <section className="syllabus-section">
      <h2 className="syllabus-title">Syllabus</h2>
      <div className="syllabus-grid">
        <div className="branch-row">
          {branches.slice(0, 3).map((branch, index) => (
            <div 
              key={index} 
              className="branch-card"
              onClick={() => console.log(`Clicked ${branch}`)}
            >
              <span className="branch-name">{branch}</span>
            </div>
          ))}
        </div>
        <div className="branch-row">
          {branches.slice(3).map((branch, index) => (
            <div 
              key={index + 3} 
              className="branch-card"
              onClick={() => console.log(`Clicked ${branch}`)}
            >
              <span className="branch-name">{branch}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SyllabusSection; 