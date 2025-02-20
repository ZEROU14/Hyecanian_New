import React from "react";

import "./App.css"; // Ensure Tailwind is set up


import MarathonDetail from "./Pages/MarathonDetail";
import Navbar from "./components/Navbar";
import EndSection from "./components/EndSection";

function App() {
  return <div className="flex flex-col">
    <Navbar></Navbar>
    <MarathonDetail/>
    <EndSection/>
  </div>;
}

export default App;
