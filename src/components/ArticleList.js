import React, { useState, useEffect } from "react";
import ArticleDataService from "../services/article.service";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchHeading, setSearchHeading] = useState("");

  useEffect(() => {
    retrieveArticles();
  }, []);

  const onChangeSearchHeading = e => {
    const searchHeading = e.target.value;
    setSearchHeading(searchHeading);
  };

  const retrieveArticles = () => {
    ArticleDataService.getAll()
      .then(response => {
        setArticles(response.data.data);
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  const setActiveArticle = (article, index) => {
    setCurrentArticle(article);
    setCurrentIndex(index);
  };

  const findByHeading = () => {
    ArticleDataService.findByHeading(searchHeading)
      .then(response => {
        setArticles(response.data.data);
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by heading"
            value={searchHeading}
            onChange={onChangeSearchHeading}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByHeading}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Articles List</h4>

        <ul className="list-group">
          {articles &&
            articles.map((article, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveArticle(article, index)}
                key={index}
              >
                {article.heading}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentArticle ? (
          <div>
            <h4>Article</h4>
            <div>
              <label>
                <strong>heading:</strong>
              </label>{" "}
              {currentArticle.heading}
            </div>
            <div>
              <label>
                <strong>Content:</strong>
              </label>{" "}
              {currentArticle.content}
            </div>
            <div>
              <label>
                <strong>Created Date:</strong>
              </label>{" "}
              {currentArticle.created_at}
            </div>
            <div>
              <label>
                <strong>updated Date:</strong>
              </label>{" "}
              {currentArticle.updated_at}
            </div>
      
            <Link
              to={"/article/" + currentArticle.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Article...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesList;