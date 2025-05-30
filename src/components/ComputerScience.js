import React from "react";
import "./ComputerScience.css";


const subjects = [
    { 
        name: "Calculus", 
        path: "calculus",
        driveLink: "https://drive.google.com/drive/folders/1behqPPccZ0NOBgLWY5y1vMG0Fd0tyQro?usp=sharing"
    },
    { 
        name: "DSA", 
        path: "dsa",
        driveLink: "https://drive.google.com/drive/folders/10U1wK9xeZ01g4Hoixl5ga4NMg3HMiwH1?usp=sharing"
    },
    { 
        name: "DBMS", 
        path: "dbms",
        driveLink: "https://drive.google.com/drive/folders/1zulAl551mPfKg-eOyL1_f0fQ7l4sTU6Q?usp=sharing"
    },
    { 
        name: "Machine Learning ", 
        path: "ml",
        driveLink: "https://drive.google.com/drive/folders/1W2FJnvqz5LQYIqXZIggPWkG7xrvcEcId?usp=sharing"
    },
    { 
        name: "Operating Systems", 
        path: "os",
        driveLink: "https://drive.google.com/drive/folders/1cVTLyX6HzU7WClhmm7ycUpaQp-wTzLeq?usp=sharing"
    },
];

function ComputerScience() {
    const handleSubjectClick = (driveLink) => {
        window.open(driveLink, '_blank');
    };

    return (
        <section className="cs-section">
            <h2 className="cs-title">Computer Science Subjects</h2>

            <div className="cs-grid">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        className="cs-card-link"
                        onClick={() => handleSubjectClick(subject.driveLink)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="cs-card">
                            <p className="cs-subject-name">{subject.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ComputerScience; 