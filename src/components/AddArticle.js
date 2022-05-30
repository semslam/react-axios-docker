import React from "react";

class AddArticle extends React.Component {
  state = {
    heading: "",
    content: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.heading === "" || this.state.content === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addArticleHandler(this.state);
    this.setState({ heading: "", content: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Article</h2>
        <form className="ui form" onSubmit={this.add}>
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
              type="textarea"
              name="content"
              placeholder="Content"
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add Article</button>
        </form>
      </div>
    );
  }
}

export default AddArticle;