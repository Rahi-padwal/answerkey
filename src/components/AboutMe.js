import React from "react";
import "./AboutMe.css";
// Import the image if it's located in the `src` folder
import myPhoto from "../myphoto.jpeg";

function AboutMe() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="descripcion">
          <h1>Rahi Padwal</h1>
          <h2>Web Developer</h2>
          <p>
          Hi there! I'm Rahi, a web developer passionate about crafting clean and dynamic websites. 
          I specialize in front-end and back-end development, focusing on problem-solving and creating user-friendly solutions. 
          <br/>Let’s connect and build something amazing! 
          </p>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/rahipadwal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/rahi30-prog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="/path-to-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
        <div className="image">
          <img src={myPhoto} alt="Rahi Padwal" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;