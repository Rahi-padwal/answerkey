// src/components/sy.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./sy.css";

function Sy() {
  const navigate = useNavigate();

  const branches = [
    { title: "Computer Science", id: "cs" },
    { title: "Information Technology", id: "it" },
    { title: "Electronics & Telecommunication", id: "entc" },
    { title: "Instrumentation", id: "instru" },
    { title: "Mechanical", id: "mech" },
  ];

  return (
    <div className="first-year-container">
      <h2>Second Year Branches</h2>
      <div className="grid-container">
        {branches.map((branch, idx) => (
          <div
            key={idx}
            className="paper-card"
            onClick={() => navigate(`/sy/${branch.id}`)}
          >
            {branch.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sy;
