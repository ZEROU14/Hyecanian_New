import React from "react";

import "./App.css"; // Ensure Tailwind is set up


import MarathonDetail from "./Pages/MarathonDetail";
import Navbar from "./components/Navbar";

function App() {
  return <div>
    <Navbar></Navbar>
    <MarathonDetail/>
  </div>;
}

export default App;
