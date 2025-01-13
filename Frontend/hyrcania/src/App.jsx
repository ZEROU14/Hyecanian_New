import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css"; // Ensure Tailwind is set up
import Article from "./components/Article"; // Import Article component
import { articles } from "./components/Article"; // Import articles array

function App() {
  return (
    <div>
      <Header />


       <div>
        <div className="w-[90%] mx-auto pt-[100px] flex justify-between">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
        
      </div>
      <Routes>
        <Route path="/"  />
        <Route path="/blogs" />
        <Route path="/contact"/>
      </Routes>
    </div>
  );
}

export default App;
