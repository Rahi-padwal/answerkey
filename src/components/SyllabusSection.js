import React, { useState } from 'react';
import './SyllabusSection.css';
import SyllabusModal from './SyllabusModal';

const SyllabusSection = () => {
  const branches = [
    "Computer Engineering",
    "Information Technology",
    "ENTC",
    "Mechanical",
    "Instrumentation"
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('');

  const handleCardClick = (branch) => {
    setSelectedBranch(branch);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBranch(''); // Clear selected branch on close
  };

  return (
    <section className="syllabus-section">
      <h2 className="syllabus-title">Syllabus</h2>
      <div className="syllabus-grid">
        <div className="branch-row">
          {branches.slice(0, 3).map((branch, index) => (
            <div 
              key={index} 
              className="branch-card"
              onClick={() => handleCardClick(branch)}
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
              onClick={() => handleCardClick(branch)}
            >
              <span className="branch-name">{branch}</span>
            </div>
          ))}
        </div>
      </div>

      <SyllabusModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        branchName={selectedBranch} 
      />
    </section>
  );
};

export default SyllabusSection; 