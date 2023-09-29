import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> WEBPAGE
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
