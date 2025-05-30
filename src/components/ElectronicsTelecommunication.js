import React from "react";
import "./ElectronicsTelecommunication.css";

const subjects = [
    { 
        name: "DSA", 
        path: "dsa",
        driveLink: "https://drive.google.com/drive/folders/1wRiK2WPXtp2xBO4NJ0xHKNR5vDhLaHRx?usp=sharing"
    },
    { 
        name: "UHV", 
        path: "uhv",
        driveLink: "https://drive.google.com/drive/folders/1rfX7ZZ7QRkv0EnypoE9TZByOI-Hevz8c?usp=sharing"
    },
    { 
        name: "ECA", 
        path: "eca",
        driveLink: "https://drive.google.com/drive/folders/1xIMgp68dDgcYnkLeWk2fXPD30NxOpNK-?usp=sharing"
    },
    { 
        name: "SAHD", 
        path: "sahd",
        driveLink: "https://drive.google.com/drive/folders/1pwnxnTDxfEXWwWme1pnqGrZqhfXjZ5QN?usp=sharing"
    },
    { 
        name: "Digital Electronics", 
        path: "de",
        driveLink: "https://drive.google.com/drive/folders/1a7CV73gsILH-KkK_GijijdXpBu3jV7kW?usp=sharing"
    },
    { 
        name: "Digital Marketing", 
        path: "dm",
        driveLink: "https://drive.google.com/drive/folders/1mfnExLJ_jy9nJSqqLHWQgRbatqhYZlyX?usp=sharing"
    },
    { 
        name: "Digital Communication", 
        path: "dc",
        driveLink: "https://drive.google.com/drive/folders/193RNFj7I9WuncTSxnHq5bF5YK3Clb6SF?usp=sharing"
    },
    { 
        name: "Machine Learning", 
        path: "ml",
        driveLink: "https://drive.google.com/drive/folders/1Lbi5E4tebroJrWSXZMLGAtXqoqCJPdSq?usp=sharing"
    },
    
    { 
        name: "Signals and Systems", 
        path: "ss",
        driveLink: "https://drive.google.com/drive/folders/1w2mRiO2Vs4PFxt8K464rtlEDYNC9jQIF?usp=sharing"
    },
    
];

function ElectronicsTelecommunication() {
    const handleSubjectClick = (driveLink) => {
        window.open(driveLink, '_blank');
    };

    return (
        <section className="entc-section">
            <h2 className="entc-title">Electronics & Telecommunication Subjects</h2>

            <div className="entc-grid">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        className="entc-card-link"
                        onClick={() => handleSubjectClick(subject.driveLink)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="entc-card">
                            <p className="entc-subject-name">{subject.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ElectronicsTelecommunication; 