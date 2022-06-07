import React from "react";
import {Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/articles" className="navbar-brand">
          Article News
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/articles"} className="nav-link">
              Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Article
            </Link>
          </li>
        </div>
      </nav>
  );
};

export default Header;
