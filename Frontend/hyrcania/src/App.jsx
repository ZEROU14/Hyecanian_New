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
      <h1 className="text-3xl font-bold text-center mb-8">Discover Events</h1>
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Article key={article.id} article={article} index={index} /> 
          ))}
        </div>
      </div>

      <Routes>
        <Route path="/" />
        <Route path="/blogs" />
        <Route path="/contact" />
      </Routes>
    </div>
  );
}

export default App;
