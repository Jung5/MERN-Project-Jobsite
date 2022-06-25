import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard, Error, Home, Register } from "./pages";

const App = () => {
  return (
    <Router>
      <nav>
      <Link to="/">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/home">Home</Link>
        <Link to="/*">Error</Link>
      </nav>
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
