import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/Header"; // Import Header

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter data-oid="8l2lj5l">
    <App  data-oid="90g1s5d" /> {/* Main app content */}
  </BrowserRouter>,
);
