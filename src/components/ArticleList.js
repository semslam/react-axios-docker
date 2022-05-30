import React from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

const ArticleList = (props) => {
  console.log(props);

  const deleteArticleHandler = (id) => {
    props.getArticleId(id);
  };

  const renderArticleList = props.articles.map((article) => {
    return (
      <ArticleCard
      article={article}
        clickHander={deleteArticleHandler}
        key={article.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Article List
        <Link to="/add">
          <button className="ui button blue right">Add Article</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderArticleList}</div>
    </div>
  );
};

export default ArticleList;