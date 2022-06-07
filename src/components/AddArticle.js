import React, { useState } from "react";
import ArticleDataService from "../services/article.service";

const AddArticle = () => {
  const initialArticleState = {
    id: null,
    heading: "",
    content: "",
    created_at:null,
    updated_at:null
  };
  const [article, setArticle] = useState(initialArticleState);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = event => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };

  const saveArticle = () => {
    var data = {
        heading: article.heading,
        content: article.content
    };
    ArticleDataService.create(data)
      .then(response => {
        setArticle({
            id: response.data.data.id,
            heading: response.data.data.heading,
            content: response.data.data.content
        });
        setSubmitted(true);
        console.log(response.data);
     
      })
      .catch(e => {
        console.log(e.response.data.message);  
        setMessage(e.response.data.message);
      });
  };

  const newArticle = () => {
    setArticle(initialArticleState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newArticle}>
            Add
          </button>
        </div>
      ) : (
        <div>
            <p className="error">{message}</p>
          <div className="form-group">
            <label htmlFor="heading">Heading</label>
            <input
              type="text"
              className="form-control"
              id="heading"
              value={article.heading}
              onChange={handleInputChange}
              name="heading"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              id="content"
              required
              value={article.content}
              onChange={handleInputChange}
              name="content"
            />
          </div>

          <button onClick={saveArticle} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddArticle;