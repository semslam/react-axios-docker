import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddArticle from './components/AddArticle';
import Article from './components/Article';
import ArticleList from './components/ArticleList';



function App() {
  return (
    <div>
      <Header/>
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
