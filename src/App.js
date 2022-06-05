import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Header from "./components/Header";
import AddArticle from './components/AddArticle';
import Article from './components/Article';
import ArticleList from './components/ArticleList';



function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/articles" className="navbar-brand">
          Article News
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/articles"} className="nav-link">
              Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Article
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ArticleList/>} />
          <Route path="/articles" element={<ArticleList/>} />
          <Route path="/add" element={<AddArticle/>} />
          <Route path="/articles/:id" element={<Article/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
