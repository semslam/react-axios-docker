import React from "react";
import { Link } from "react-router-dom";


const ArticleCard = (props) => {
   
  const { id, heading, content } = props.article;
  return (
    <div className="item">
      <div className="content">
        <Link
          to={{ pathname: `/article/${id}`, state: { article: props.article } }}
        >
          <div className="header">{heading}</div>
          <div>{content}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { article: props.article } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ArticleCard;