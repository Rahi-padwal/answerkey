import React from "react";
import "./InformationTechnology.css";

const subjects = [
    { 
        name: "DBMS", 
        path: "dbms",
        driveLink: "https://drive.google.com/drive/folders/1eTuQ1s0qcZZhS6unsOfo8-V1yDugh8yR?usp=sharing"
    },
    { 
        name: "UHV", 
        path: "uhv",
        driveLink: "https://drive.google.com/drive/folders/1nzqThCCmFN49NPoZMsxLyo3L3GshWsv6?usp=sharing"
    },
    { 
        name: "DECA", 
        path: "deca",
        driveLink: "https://drive.google.com/drive/folders/1hHK2gl-pjcX-QxNkHq1vx5xdYv4XOGvt?usp=sharing"
    },
    { 
        name: "DSA", 
        path: "ds",
        driveLink: "https://drive.google.com/drive/folders/1grjz1d4z2iGpExK3muivM2IjSBXFaMVM?usp=sharing"
    },
    { 
        name: "Computer Networks", 
        path: "cn",
        driveLink: "https://drive.google.com/drive/folders/1IRRJ5fu92SFCJpt2evjK8C3-gApFsqLb?usp=sharing"
    },
    { 
        name: "Discrete Mathematics", 
        path: "dm",
        driveLink: "https://drive.google.com/drive/folders/1w6Ztm7oEECO0fmPGz0ZE9S9yrsVAn8Te?usp=sharing"
    },
    { 
        name: "Network Fundamentals", 
        path: "nf",
        driveLink: "https://drive.google.com/drive/folders/1bzm6JmoBS-ETtrbu3Zf_l_JYdob7gQvf?usp=sharing"
    },
    { 
        name: "Operating Systems", 
        path: "os",
        driveLink: "https://drive.google.com/drive/folders/1bXHxvHYn5ZEt9vr15M1_Zo-gAIUz7Eqy?usp=sharing"
    },
    
];

function InformationTechnology() {
    const handleSubjectClick = (driveLink) => {
        window.open(driveLink, '_blank');
    };

    return (
        <section className="it-section">
            <h2 className="it-title">Information Technology Subjects</h2>

            <div className="it-grid">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        className="it-card-link"
                        onClick={() => handleSubjectClick(subject.driveLink)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="it-card">
                            <p className="it-subject-name">{subject.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default InformationTechnology; 