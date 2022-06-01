import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Header from "./components/Header";
import AddArticle from './components/AddArticle';
import ArticleDetail from './components/ArticleDetail';
import EditArticle from './components/EditArticle';
import ArticleList from './components/ArticleList';
import articleDataService from './services/article.service'

function App() {

  const [articles, setArticles] = useState([]);

  
  const retrieveArticles = async () => {
    const response = await articleDataService.getAll();
    return response.data.data;
  };

  const addArticleHandler = async (article) => {
    console.log(article);
    const request = {
      article
    };

    const response = await articleDataService.create(request);
    console.log(response);
    setArticles([...articles, response.data.data]);
    console.log(response);
    setArticles([...articles, response.data.data]);
  };

  const updateArticleHandler = async (article) => {
    const response = await articleDataService.update(article.id, article) // api.put(`/contacts/${article.id}`, contact);
    const { id } = response.data.data;
    setArticles(
      articles.map((article) => {
        return article.id === id ? { ...response.data.data } : article;
      })
    );
  };

  const removeArticleHandler = async (id) => {
    await articleDataService.delete(id);
    const newArticleList = articles.filter((article) => {
      return article.id !== id;
    });

    setArticles(newArticleList);
  };

  useEffect(() => {
   
    const getAllArticles = async () => {
      const allArticles = await retrieveArticles();
      if (allArticles) setArticles(allArticles);
    };

    getAllArticles();
  }, []);

  useEffect(() => {
    
  }, [articles]);
  return (
      <Router >
        {/* <Header /> */}
        <div className="container mt-3">
          <Routes>
            <Route path="/" 
            render={(props) => (
              <ArticleList {...props} articles={articles} getArticleId={removeArticleHandler} />
            )} />
            <Route path="/add"
            render={(props) => (
              <AddArticle {...props} addArticleHandler={addArticleHandler} />
            )}/>
            <Route
            path="/edit"
            render={(props) => (
              <EditArticle
                {...props}
                updateArticleHandler={updateArticleHandler}
              />
            )}/>
            <Route path="/article/:id" component={ArticleDetail} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
