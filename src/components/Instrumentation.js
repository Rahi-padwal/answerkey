import React from "react";
import "./Instrumentation.css";

const subjects = [
    { 
        name: "Control Systems", 
        path: "cs",
        driveLink: "https://drive.google.com/drive/folders/1CqH6bI61a_7XJgfCMM2cS-dT_Po6DjtO?usp=sharing"
    },
    { 
        name: "Fundamentals of Control Networks", 
        path: "fcn",
        driveLink: "https://drive.google.com/drive/folders/1fXpFjDrLEkBfGk-f9DrcTUkXQeoEViEy?usp=sharing"
    },
    { 
        name: "Microcontrollers ", 
        path: "mc",
        driveLink: "https://drive.google.com/drive/folders/17iqkjC3msC4-rW9SmY8ZXfTcJI9aHZjk?usp=sharing"
    },
    { 
        name: "Power Electronics", 
        path: "pe",
        driveLink: "https://drive.google.com/drive/folders/1qzmMHyM2ICQiW4J3eeVyZ6pIf2vUm8tV?usp=sharing"
    },
    { 
        name: "Unit Operations", 
        path: "uo",
        driveLink: "https://drive.google.com/drive/folders/1MD2o7G43GBEWCQ3DZcyTav8gpjvTM_Qr?usp=sharing"
    },
];

function Instrumentation() {
    const handleSubjectClick = (driveLink) => {
        window.open(driveLink, '_blank');
    };

    return (
        <section className="instru-section">
            <h2 className="instru-title">Instrumentation Subjects</h2>

            <div className="instru-grid">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        className="instru-card-link"
                        onClick={() => handleSubjectClick(subject.driveLink)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="instru-card">
                            <p className="instru-subject-name">{subject.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Instrumentation; 