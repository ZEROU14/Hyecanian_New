import React from "react";

import "./App.css"; // Ensure Tailwind is set up


import MarathonDetail from "./Pages/MarathonDetail";
import Navbar from "./components/Navbar";
import EndSection from "./components/EndSection";
import Home from "./Pages/Home";
function App() {
  return <div className="flex flex-col">
    <Navbar></Navbar>
    <Home/>
    <EndSection/>
  </div>;
}

export default App;
