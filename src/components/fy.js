import React from "react";
import "./fy.css";

function Fy() {
  const papers = [
    { title: "BEEE", url: "https://drive.google.com/drive/folders/14E7Dn_JgBAhjIUXOrZVtRRnuyPZmHhKO?usp=sharing" },
    { title: "CHEMISTRY", url: "https://drive.google.com/drive/folders/1IS2QuUZ9DVk0QKefkKf8s-3-fx7UyuLr?usp=sharing" },
    { title: "Engineering Graphics", url: "https://drive.google.com/drive/folders/1MQvVvVpSjBTLII1oUNMQNk5jh42TgQjl?usp=sharing" },
    { title: "LAUC", url: "https://drive.google.com/drive/folders/13z_6PapAtEHkCH_INPKdzB8kmL6EWTTj?usp=sharing" },
    { title: "MVC", url: "https://drive.google.com/drive/folders/1qPF5bd51z_7pbJAYxFT8GHFuLF27JjO9?usp=sharing" },
    { title: "PHYSICS", url: "https://drive.google.com/drive/folders/1ptNHiK3xyhKHcu-jBzTSQRqHpfSNyFrH?usp=sharing" },
    { title: "Sustainable Engineering", url: "https://drive.google.com/drive/folders/1JkXMkgwh0Xeo7geMDCl6g8lppB3g-X6I?usp=sharing" },
  ];

  return (
    <div className="first-year-container">
      <h2>First Year Question Papers</h2>
      <div className="grid-container">
        {papers.map((paper, idx) => (
          <a
            key={idx}
            href={paper.url}
            className="paper-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            {paper.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Fy;
