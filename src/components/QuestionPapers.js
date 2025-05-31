import React from "react";
import "./QuestionPapers.css";
import { Link } from 'react-router-dom';

const subjects = [
    { name: "First Year", path: "first-year" },
    { name: "Computer Science", path: "comp" },
    { name: "Information Technology", path: "it" },
    { name: "Electronics & Telecommunication", path: "entc" },
    { name: "Mechanical", path: "mech" },
    { name: "Instrumentation", path: "instru" },
];

function QuestionPapers() {
    const handleCardClick = (subject) => {
        // Show login modal after 2 seconds
        setTimeout(() => {
            const event = new CustomEvent('showLoginModal');
            window.dispatchEvent(event);
        }, 500);
    };

    return (
        <section className="question-papers-section">
            <h2 className="qp-title">Last Year Question Paper</h2>

            <div className="qp-grid">
                <div className="subject-row">
                    {subjects.slice(0, 3).map((subject, index) => (
                        <Link
                            key={index}
                            to={`/subject/${subject.path}`}
                            className="qp-card-link"
                            onClick={() => handleCardClick(subject)}
                        >
                            <div className="qp-card">
                                <p className="qp-subject-name">{subject.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="subject-row">
                    {subjects.slice(3).map((subject, index) => (
                        <Link
                            key={index + 3}
                            to={`/subject/${subject.path}`}
                            className="qp-card-link"
                            onClick={() => handleCardClick(subject)}
                        >
                            <div className="qp-card">
                                <p className="qp-subject-name">{subject.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default QuestionPapers;