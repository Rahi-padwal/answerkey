import React from "react";
import "./Mechanical.css";

const subjects = [
    { 
        name: "Analysis & Systhesis of Mechanisms", 
        path: "asm",
        driveLink: "https://drive.google.com/drive/folders/1TZbIH8RA1m7gwJ1f8zsUejL31e9GnZHp?usp=sharing"
    },
    { 
        name: "Casting Forming", 
        path: "cf",
        driveLink: "https://drive.google.com/drive/folders/1wcy7s9H1uUttGmChnApSwWwVLC3lLAeR?usp=sharing"
    },
    { 
        name: "Fluid Mechanics", 
        path: "fluid-mech",
        driveLink: "https://drive.google.com/drive/folders/195c8u7z9j7uoIbrCcbXQEJ6JEgQjQ68T?usp=sharing"
    },
    { 
        name: "Machine Design", 
        path: "md",
        driveLink: "https://drive.google.com/drive/folders/1_B-nHlDTyYJ1wxV1yr9AN_JJNayOA6hg?usp=sharing"
    },
];

function Mechanical() {
    const handleSubjectClick = (driveLink) => {
        window.open(driveLink, '_blank');
    };

    return (
        <section className="mech-section">
            <h2 className="mech-title">Mechanical Subjects</h2>

            <div className="mech-grid">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        className="mech-card-link"
                        onClick={() => handleSubjectClick(subject.driveLink)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="mech-card">
                            <p className="mech-subject-name">{subject.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Mechanical; 