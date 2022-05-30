import React from "react";

class EditArticle extends React.Component {
   
  constructor(props) {
    super(props);
    const { id, heading, content } = props.location.state.article;
    this.state = {
      id,
      heading,
      content,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.heading === "" || this.state.content === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateArticleHandler(this.state);
    this.setState({ heading: "", content: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Article</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Heading</label>
            <input
              type="text"
              name="heading"
              placeholder="Heading"
              value={this.state.heading}
              onChange={(e) => this.setState({ heading: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Content</label>
            <input
              type="text"
              name="content"
              placeholder="Content"
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditArticle;