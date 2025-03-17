import React from "react";
import "./fy.css"; // ✅ Add CSS if needed

function fy() {
  return (
    <div className="first-year-container">
      <h2>First Year Question Papers</h2>
      <p>Here you can find all the previous year question papers for the first year.</p>

      {/* Example: List of question papers */}
      <ul className="question-list">
        <li><a href="/papers/first-year-subject1.pdf" download>Subject 1 - 2023</a></li>
        <li><a href="/papers/first-year-subject2.pdf" download>Subject 2 - 2022</a></li>
        <li><a href="/papers/first-year-subject3.pdf" download>Subject 3 - 2021</a></li>
      </ul>
    </div>
  );
}

export default fy;
