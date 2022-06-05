import React, { useState, useEffect } from "react";
import ArticleDataService from "../services/article.service";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchHeading, setSearchHeading] = useState("");

  useEffect(() => {
    retrieveArticles();
  }, []);

  // const onChangeSearchHeading = e => {
  //   const searchHeading = e.target.value;
  //   setSearchHeading(searchHeading);
  // };

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

  // const findByHeading = () => {
  //   ArticleDataService.findByHeading(searchHeading)
  //     .then(response => {
  //       setArticles(response.data.data);
  //       console.log(response.data.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  return (
    <div className="list row">
      
      <div className="col-md-6">
        <h4>Articles List</h4>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Creation Date</th>
    </tr>
  </thead>
  <tbody>
  {articles &&
            articles.map((article, index) => (
              <tr>
              <td>{index +=1}</td>
              <td
                className={
                (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveArticle(article, index)}
                key={index}
              >
                {article.heading}
                </td>
                <td>{new Date(article.created_at).toString()}</td>
              </tr>
            ))}
    
  </tbody>
</table>

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
              to={`/articles/${currentArticle.id}`}
              className="btn btn-info btn-sm"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <Link
              to={`/add`}
              className="btn btn-success"
            >
              Create Article
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesList;