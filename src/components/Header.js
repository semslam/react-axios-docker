import React from "react";
import {Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/articles"} className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/articles"} className="active">
            Articles
          </Link>
        </li>
        <li>
          <Link to={"/add"} className="active">
            Add Article
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
