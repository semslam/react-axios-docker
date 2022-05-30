import React from "react";
import { Link } from "react-router-dom";


const ArticleDetail = (props) => {
  const { heading, content } = props.location.state.article;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{heading}</div>
          <div className="description">{content}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Article List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;