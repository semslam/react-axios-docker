
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ArticleDataService from "../services/article.service";

const Article = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialArticleState = {
    id: null,
    heading: "",
    content: ""
  };
  const [currentArticle, setCurrentArticle] = useState(initialArticleState);
  const [message, setMessage] = useState("");

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

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentArticle({ ...currentArticle, [name]: value });
  };

  const updateArticle = () => {
    ArticleDataService.update(currentArticle.id, currentArticle)
      .then(response => {
        console.log(response.data);
        setMessage("The article was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteArticle = () => {
    console.log("Delete Article ====>");
    console.log(currentArticle.id)
    ArticleDataService.delete(currentArticle.id)
      .then(response => {
        console.log(response.data);
        navigate("/articles");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentArticle ? (
        <div className="edit-form">
          <h4>Article</h4>
          <form>
            <div className="form-group">
              <label htmlFor="heading">Heading</label>
              <input
                type="text"
                className="form-control"
                id="heading"
                name="heading"
                value={currentArticle.heading}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                type="text"
                className="form-control"
                id="content"
                name="content"
                value={currentArticle.content}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="btn btn-danger btn-sm" onClick={deleteArticle}>
            Delete
          </button>
          &#160; &#160;
          <button
            type="submit"
            className="btn btn-success btn-sm"
            onClick={updateArticle}
          >
            Update
          </button>
          <p>{message}</p>
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

export default Article;