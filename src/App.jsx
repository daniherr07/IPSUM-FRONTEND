import React from "react";
import "./public/styles.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hola" element={<Home />} />
          <Route path="/add" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
