import React, { useState } from "react";
import "./QuestionPapers.css";

const subjects = [
    { name: "Comp + IT\n BSH", year: "First Year", type: "BSH" },
    { name: "ENTC + MECH + INSTRU\n BSH", year: "First Year", type: "BSH" },
    { name: "COMP\nSECOND YEAR", year: "Second Year", type: "Second Year" },
    { name: "IT\nSECOND YEAR", year: "Second Year", type: "Second Year" },
    { name: "ENTC\n SECOND YEAR", year: "Second Year", type: "Second Year" },
    { name: "MECH\nSECOND YEAR", year: "Second Year", type: "Second Year" },
    { name: "INSTRU\nSECOND YEAR", year: "Second Year", type: "Second Year" },
];

const tabs = ["All", "First Year", "Second Year"];

function QuestionPapers() {
    const [activeTab, setActiveTab] = useState("All");

    const bshSubjects = subjects.filter(subject => subject.type === "BSH");
    const secondYearSubjects = subjects.filter(subject => subject.type === "Second Year");
    const firstYearBshSubjects = subjects.filter(subject => subject.year === "First Year" && subject.type === "BSH");
    const secondYearOnlySubjects = subjects.filter(subject => subject.year === "Second Year" && subject.type === "Second Year");

    const getVisibleBshSubjects = () => {
        if (activeTab === "All") return bshSubjects;
        if (activeTab === "First Year") return firstYearBshSubjects;
        return []; // Second year doesn't have BSH in this data
    };

    const getVisibleSecondYearSubjects = () => {
        if (activeTab === "All") return secondYearSubjects;
        if (activeTab === "Second Year") return secondYearOnlySubjects;
        return []; // First year doesn't have explicit second year subjects
    };

    return (
        <section className="question-papers-section">
            <h2 className="qp-title">Last Year Question Paper</h2>

            {/* Filter Tabs */}
            <div className="tab-container">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* BSH Subjects Row */}
            {(activeTab === "All" || activeTab === "First Year") && getVisibleBshSubjects().length > 0 && (
                <>
                    <div className="qp-grid bsh-grid">
                        {getVisibleBshSubjects().map((subject, index) => (
                            <div key={index} className="qp-card">
                                <p className="qp-subject-name">{subject.name}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Second Year Subjects Row */}
            {(activeTab === "All" || activeTab === "Second Year") && getVisibleSecondYearSubjects().length > 0 && (
                <>
                    <div className="qp-grid second-year-grid">
                        {getVisibleSecondYearSubjects().map((subject, index) => (
                            <div key={index} className="qp-card">
                                <p className="qp-subject-name">{subject.name}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}

export default QuestionPapers;