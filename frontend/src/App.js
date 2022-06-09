import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard, Error, Home, Register } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  );
};

export default App;
