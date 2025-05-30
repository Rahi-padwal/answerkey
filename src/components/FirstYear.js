import React from "react";
import "./QuestionPapers.css";
import { Link } from 'react-router-dom';

const firstYearSubjects = [
    { name: "BEEE", path: "beee" },
    { name: "CHEMISTRY", path: "chemistry" },
    { name: "Engineering Graphics", path: "eg" },
    { name: "LAUC", path: "lauc" },
    { name: "MVC", path: "mvc" },
    { name: "PHYSICS", path: "physics" },
    { name: "Sustainable Engineering", path: "se" }
];

function FirstYear() {
    const handleCardClick = (subject) => {
        // Show login modal after 2 seconds
        setTimeout(() => {
            const event = new CustomEvent('showLoginModal');
            window.dispatchEvent(event);
        }, 2000);
    };

    return (
        <section className="question-papers-section">
            <h2 className="qp-title">First Year Question Papers</h2>

            <div className="qp-grid">
                <div className="subject-row">
                    {firstYearSubjects.slice(0, 4).map((subject, index) => (
                        <Link
                            key={index}
                            to={`/subject/${subject.path}`}
                            className="qp-card-link"
                            onClick={() => handleCardClick(subject)}
                        >
                            <div className="qp-card first-year-card">
                                <p className="qp-subject-name">{subject.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="subject-row">
                    {firstYearSubjects.slice(4).map((subject, index) => (
                        <Link
                            key={index + 4}
                            to={`/subject/${subject.path}`}
                            className="qp-card-link"
                            onClick={() => handleCardClick(subject)}
                        >
                            <div className="qp-card first-year-card">
                                <p className="qp-subject-name">{subject.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FirstYear; 