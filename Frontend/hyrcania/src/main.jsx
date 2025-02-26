import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <BrowserRouter>
        <App data-oid="90g1s5d" /> {/* Main app content */}
    </BrowserRouter>
);
