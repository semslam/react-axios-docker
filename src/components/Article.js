
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
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
  const [errorMessage, setErrorMessage] = useState("");

  const getArticle = id => {
    ArticleDataService.get(id)
      .then(response => {
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
        setMessage("The article was updated successfully!");
      })
      .catch(e => {
        console.log(e.response.data.message);
        setErrorMessage(e.response.data.message);
      });
  };

  const deleteArticle = () => {
    ArticleDataService.delete(currentArticle.id)
      .then(response => {
        navigate("/articles");
      })
      .catch(e => {
        console.log(e.response.data.message);
        setErrorMessage(e.response.data.message);
      });
  };

  return (
    <div>
      {currentArticle ? (
        <div className="edit-form">
          <h4>Article</h4>
          <p className="error">{errorMessage}</p>
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
          <Link
              to={`/add`}
              className="btn btn-success"
            >
              Create Article
            </Link>
        </div>
      )}
    </div>
  );
};

export default Article;