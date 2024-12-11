// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import News from "./components/News";
import Discord from "./components/Discord";

function App() {
  return (
    <div className="bg-dark text-light">
      <Router>
        <Navbar />

        {/* Define other the routes below the navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/discord" element={<Discord />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
