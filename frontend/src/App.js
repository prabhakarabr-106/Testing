import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reg from "./pages/Reg.js";
import Log from "./pages/Log.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/register" element={<Reg />} />
        <Route path="/login" element={<Log />} />
      </Routes>
    </Router>
  );
}

export default App;
