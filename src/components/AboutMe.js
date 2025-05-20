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
          Hi, I'm Rahi Padwal — a second-year Electronics and Telecommunication Engineering student.<br/>
          I'm a web developer who loves crafting user-friendly frontend interfaces & building backend systems. 
          Through internships, freelance work, and college projects, I've contributed to a range of projects.
          I'm always excited to create something that truly helps someone.<br/><br/>
          Outside of tech, I'm deeply passionate about animal welfare and love playing basketball. 
          If you have suggestions for this website or just want to appreciate my work, feel free to share your thoughts in the email.
           I'd love to hear from you!
          </p>
        </div>
        <div className="image">
          <img src={myPhoto} alt="Rahi Padwal" />
          {/* Moved icons here */}
          <div className="icons-below-photo">
            <a
              href="https://www.linkedin.com/in/rahipadwal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Rahi-padwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
             <a
              href="mailto:rahi.padwal@cumminscollege.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;