import React, { useState, useRef, useEffect } from "react";
import "./sy.css";

function Sy() {
  const [dropdowns, setDropdowns] = useState({
    CS: false,
    ENTC: false,
    IT: false,
    INSTRU: false,
    MECH: false,
  });

  const dropdownRefs = {
    CS: useRef(null),
    ENTC: useRef(null),
    IT: useRef(null),
    INSTRU: useRef(null),
    MECH: useRef(null),
  };

  const toggleDropdown = (department) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [department]: !prevDropdowns[department],
    }));
  };

  const closeDropdowns = (e) => {
    Object.keys(dropdowns).forEach((department) => {
      if (
        dropdowns[department] &&
        dropdownRefs[department].current &&
        !dropdownRefs[department].current.contains(e.target)
      ) {
        setDropdowns((prevDropdowns) => ({
          ...prevDropdowns,
          [department]: false,
        }));
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdowns);
    return () => {
      document.removeEventListener("mousedown", closeDropdowns);
    };
  }, [dropdowns]);

  return (
    <section className="second-year-container">
      <h2>Second Year Question Papers</h2>

      <div className="department-row">
        <div className="department-box">
          <span onClick={() => toggleDropdown("CS")}>CS <span className="dropdown-icon">V</span></span>
          {dropdowns.CS && (
            <div className="dropdown" ref={dropdownRefs.CS}>
              <a href="/cs-papers/2023">CS Papers 2023</a>
              <a href="/cs-papers/2022">CS Papers 2022</a>
              {/* Add more links as needed */}
            </div>
          )}
        </div>
        <div className="department-box">
          <span onClick={() => toggleDropdown("ENTC")}>ENTC <span className="dropdown-icon">V</span></span>
          {dropdowns.ENTC && (
            <div className="dropdown" ref={dropdownRefs.ENTC}>
              <a href="/entc-papers/2023">ENTC Papers 2023</a>
              <a href="/entc-papers/2022">ENTC Papers 2022</a>
              {/* Add more links as needed */}
            </div>
          )}
        </div>
        <div className="department-box">
          <span onClick={() => toggleDropdown("IT")}>IT <span className="dropdown-icon">V</span></span>
          {dropdowns.IT && (
            <div className="dropdown" ref={dropdownRefs.IT}>
              <a href="/it-papers/2023">IT Papers 2023</a>
              <a href="/it-papers/2022">IT Papers 2022</a>
              {/* Add more links as needed */}
            </div>
          )}
        </div>
      </div>

      <div className="department-row">
        <div className="department-box">
          <span onClick={() => toggleDropdown("INSTRU")}>INSTRU <span className="dropdown-icon">V</span></span>
          {dropdowns.INSTRU && (
            <div className="dropdown" ref={dropdownRefs.INSTRU}>
              <a href="/instru-papers/2023">INSTRU Papers 2023</a>
              <a href="/instru-papers/2022">INSTRU Papers 2022</a>
              {/* Add more links as needed */}
            </div>
          )}
        </div>
        <div className="department-box">
          <span onClick={() => toggleDropdown("MECH")}>MECH <span className="dropdown-icon">V</span></span>
          {dropdowns.MECH && (
            <div className="dropdown" ref={dropdownRefs.MECH}>
              <a href="/mech-papers/2023">MECH Papers 2023</a>
              <a href="/mech-papers/2022">MECH Papers 2022</a>
              {/* Add more links as needed */}
            </div>
          )}
        </div>
      </div>

      {/* You can add your question paper list or other content here */}
    </section>
  );
}

export default Sy;