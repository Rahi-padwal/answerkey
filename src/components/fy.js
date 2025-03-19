import React from "react";
import "./fy.css"; // ✅ Add CSS if needed

function Fy() {
  return (
    <div className="first-year-container">
      <h2>First Year Question Papers</h2>

      {/* List of question papers with Google Drive links */}
      <ul className="question-list">
        <li><a href="https://drive.google.com/file/d/your_file_id_1/view" target="_blank" rel="noopener noreferrer">Subject 1 - 2023</a></li>
        <li><a href="https://drive.google.com/file/d/your_file_id_2/view" target="_blank" rel="noopener noreferrer">Subject 2 - 2022</a></li>
        <li><a href="https://drive.google.com/file/d/your_file_id_3/view" target="_blank" rel="noopener noreferrer">Subject 3 - 2021</a></li>
      </ul>
    </div>
  );
}

export default Fy;
