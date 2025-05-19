import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import QuestionPapers from "./components/QuestionPapers";
import FirstYear from "./components/fy";
import SecondYear from "./components/sy";
import AboutMe from "./components/AboutMe";
import LoginModal from "./components/login";
import BranchPage from "./components/BranchPage"; // ✅ Import the new component
import ComputerScience from "./components/ComputerScience";
import InformationTechnology from "./components/InformationTechnology";
import ElectronicsTelecommunication from "./components/ElectronicsTelecommunication";
import Instrumentation from "./components/Instrumentation";
import Mechanical from "./components/Mechanical";
import SyllabusSection from "./components/SyllabusSection";
import "./App.css";

function App() {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showWebsite, setShowWebsite] = useState(true);

    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWebsite(false);
            setLoginOpen(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setLoginOpen(false);
        setShowWebsite(true);
    };

    // Smooth Scroll Function (Only for Home Page)
    const smoothScroll = (event, targetId) => {
        event.preventDefault();
        const section = document.getElementById(targetId);
        if (location.pathname === "/" && section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            // If not on home page, navigate to home and then scroll
            navigate("/");
            // Use setTimeout to ensure the navigation completes before scrolling
            setTimeout(() => {
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    };

    const navigate = useNavigate(); // Import and use useNavigate for programmatic navigation

    return (
        <div>
            {isLoginOpen && !isLoggedIn && (
                <LoginModal isOpen={isLoginOpen} onLogin={handleLogin} />
            )}

            {showWebsite || isLoggedIn ? (
                <>
                    {/* Navigation Bar */}
                    <nav className="navbar">
                        <div className="navbar-left">
                            <h1>Answer Key</h1>
                        </div>
                        <div className="navbar-right">
                            <ul>
                                <li><Link to="/" onClick={(e) => smoothScroll(e, "home")}>Home</Link></li>
                                <li><Link to="/question-papers" onClick={(e) => smoothScroll(e, "question-papers")}>Question Papers</Link></li>
                                <li><Link to="/syllabus" onClick={(e) => smoothScroll(e, "syllabus")}>Syllabus</Link></li>
                                <li><Link to="/about-me" onClick={(e) => smoothScroll(e, "about-me")}>About Me</Link></li>
                            </ul>
                        </div>
                    </nav>

                    {/* Handle Smooth Scrolling Sections ONLY on the Home Page */}
                    {location.pathname === "/" && (
                        <>
                            <section id="home">
                                <Home />
                            </section>
                            <section id="question-papers">
                                <QuestionPapers />
                            </section>
                            <section id="syllabus">
                                <SyllabusSection />
                            </section>
                            <section id="about-me">
                                <AboutMe />
                            </section>
                        </>
                    )}

                    {/* Define Routes for Separate Pages */}
                    <Routes>
                        <Route path="/" element={<></>} /> {/* Home content is rendered above for smooth scrolling */}
                        <Route path="/question-papers" element={<QuestionPapers />} />
                        <Route path="/first-year" element={<FirstYear />} />
                        {/* ✅ Define the route for the second year branch page */}
                        <Route path="/sy/:branchName" element={<SecondYear />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        {/* ✅ Define the new route for the branch details page */}
                        <Route path="/branch/:branchName" element={<BranchPage />} />
                        <Route path="/subject/comp" element={<ComputerScience />} />
                        <Route path="/subject/it" element={<InformationTechnology />} />
                        <Route path="/subject/entc" element={<ElectronicsTelecommunication />} />
                        <Route path="/subject/instru" element={<Instrumentation />} />
                        <Route path="/subject/mech" element={<Mechanical />} />
                        <Route path="*" element={<h2 style={{ color: "white", textAlign: "center" }}>404 - Page Not Found</h2>} />
                    </Routes>
                </>
            ) : null}
        </div>
    );
}

export default App;