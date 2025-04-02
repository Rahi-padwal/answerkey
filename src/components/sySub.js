// src/components/sySub.js
import React from "react";
import { useParams } from "react-router-dom";
import "./sySub.css";

const subjectData = {
  cs: {
    name: "Computer Science",
    subjects: [
      { title: "DSA", url: "https://drive.google.com/dsa" },
      { title: "OOP", url: "https://drive.google.com/oop" },
      { title: "DBMS", url: "https://drive.google.com/dbms" },
    ],
  },
  it: {
    name: "Information Technology",
    subjects: [
      { title: "Java", url: "https://drive.google.com/java" },
      { title: "Python", url: "https://drive.google.com/python" },
      { title: "Web Tech", url: "https://drive.google.com/webtech" },
    ],
  },
  entc: {
    name: "Electronics & Telecommunication",
    subjects: [
      { title: "Signals", url: "https://drive.google.com/signals" },
      { title: "Digital Circuits", url: "https://drive.google.com/dc" },
    ],
  },
  instru: {
    name: "Instrumentation",
    subjects: [
      { title: "Sensors", url: "https://drive.google.com/sensors" },
      { title: "Control Systems", url: "https://drive.google.com/control" },
    ],
  },
  mech: {
    name: "Mechanical",
    subjects: [
      { title: "Thermodynamics", url: "https://drive.google.com/thermo" },
      { title: "Mechanics", url: "https://drive.google.com/mech" },
    ],
  },
};

function SySub() {
  const { branchId } = useParams();
  const branch = subjectData[branchId];

  if (!branch) return <h2>Branch not found.</h2>;

  return (
    <div className="first-year-container">
      <h2>{branch.name} Subjects</h2>
      <div className="grid-container">
        {branch.subjects.map((subject, idx) => (
          <a
            key={idx}
            className="paper-card"
            href={subject.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {subject.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SySub;
