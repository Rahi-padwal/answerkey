import React from 'react';
import './SyllabusModal.css';

const getPdfFileName = (branchName, semesterSlug) => {
  // Define mappings for combined PDFs
  if ((branchName === "Computer Engineering" || branchName === "Information Technology") && semesterSlug === "sem1") {
    return "CS-IT-SEM1.pdf";
  }
  if ((branchName === "Computer Engineering" || branchName === "Information Technology") && semesterSlug === "sem2") {
    return "CS-IT-SEM2.pdf";
  }
  if ((branchName === "ENTC" || branchName === "Instrumentation" || branchName === "Mechanical") && semesterSlug === "sem1") {
    return "ETC-IN-MECH-SEM1.pdf";
  }
    if ((branchName === "ENTC" || branchName === "Instrumentation" || branchName === "Mechanical") && semesterSlug === "sem2") {
    return "ETC-IN-MECH-SEM2.pdf";
  }

  // Default to single branch/semester format if no combined mapping exists
  const branchSlugs = {
    "Computer Engineering": "CS", // Use CS slug for single files
    "Information Technology": "IT",
    "ENTC": "ENTC",
    "Mechanical": "MECH",
    "Instrumentation": "INSTRU",
  };

  const branchSlug = branchSlugs[branchName] || '';

  // Handle cases like MECH-SSEM4.pdf vs MECH-SEM3.pdf
   if (branchName === "Mechanical" && semesterSlug === "sem4") {
     return `MECH-SSEM4.pdf`;
   }

  return `${branchSlug}-${semesterSlug}.pdf`;
};

const SyllabusModal = ({ isOpen, onClose, branchName }) => {
  if (!isOpen) return null;

  const semesters = [
    { name: "SEM - 1", slug: "sem1" },
    { name: "SEM - 2", slug: "sem2" },
    { name: "SEM - 3", slug: "sem3" },
    { name: "SEM - 4", slug: "sem4" },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <h3>Syllabus for {branchName}</h3>
        <div className="semester-links">
          {semesters.map((sem) => {
             const pdfFileName = getPdfFileName(branchName, sem.slug);
             const pdfPath = `/pdfs/${pdfFileName}`; 

            return (
              <a 
                key={sem.slug} 
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="semester-link"
              >
                {sem.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SyllabusModal; 