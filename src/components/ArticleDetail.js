
import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import ArticleDataService from "../services/article.service";


const ArticleDetail = (props) => {
    const { id,edit }= useParams();
    const initialArticleState = {
      id: null,
      heading: "",
      content: "",
      created_at: null,
      updated_at: null
    };
    const [currentArticle, setCurrentArticle] = useState(initialArticleState);  
    const getArticle = id => {
      ArticleDataService.get(id)
        .then(response => {
          console.log(response.data);
          setCurrentArticle(response.data.data);
          
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    useEffect(() => {
      if (id)
        getArticle(id);
    }, [id]);
  
   

  return (
    <div>
    {currentArticle ? (
      <div>
      <h4>Article detail</h4>
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
        to={"/articles"}
        className="badge badge-warning"
      >
        Article list
      </Link>
    </div>
    ) : (
      <div>
        <br />
        <p>Please click on a Article...</p>
      </div>
    )}
  </div>
  );
};

export default ArticleDetail;