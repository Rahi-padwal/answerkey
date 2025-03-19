import React from "react";
import "./sy.css";
import { useNavigate } from "react-router-dom";

function Sy() {
  const navigate = useNavigate();

  const handleDepartmentClick = (department) => {
    // You can customize the action here (e.g., navigate to a specific page)
    console.log(`Clicked on ${department}`);
    // Example: navigate(`/second-year/${department.toLowerCase()}`); 
  };

  return (
    <section className="second-year-container">
      <h2>Second Year Question Papers</h2>

      <div className="department-row">
        <div className="department-box" onClick={() => handleDepartmentClick("CS")}>
          CS
        </div>
        <div className="department-box" onClick={() => handleDepartmentClick("ENTC")}>
          ENTC
        </div>
        <div className="department-box" onClick={() => handleDepartmentClick("IT")}>
          IT
        </div>
      </div>

      <div className="department-row">
        <div className="department-box" onClick={() => handleDepartmentClick("INSTRU")}>
          INSTRU
        </div>
        <div className="department-box" onClick={() => handleDepartmentClick("MECH")}>
          MECH
        </div>
      </div>

      {/* You can add your question paper list or other content here */}
    </section>
  );
}

export default Sy;