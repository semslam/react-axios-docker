
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ArticleDataService from "../services/article.service";

const Article = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialArticleState = {
    id: null,
    heading: "",
    content: "",
    created_at:null,
    updated_at:null
  };
  const [currentArticle, setCurrentArticle] = useState(initialArticleState);
  const [message, setMessage] = useState("");

  const getArticle = id => {
    ArticleDataService.get(id)
      .then(response => {
        setCurrentArticle(response.data.data);
        console.log(response.data);
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

  const updatePublished = () => {
    var data = {
      id: currentArticle.id,
      heading: currentArticle.heading,
      content: currentArticle.content,
    };

    ArticleDataService.update(currentArticle.id, data)
      .then(response => {
        setCurrentArticle({ ...currentArticle});
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
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
    ArticleDataService.remove(currentArticle.id)
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
              <input
                type="text"
                className="form-control"
                id="content"
                name="content"
                value={currentArticle.content}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteArticle}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
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