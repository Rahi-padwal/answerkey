import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot from react-dom/client
import { BrowserRouter as Router } from "react-router-dom"; // ✅ Router stays here
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct way for React 18
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
