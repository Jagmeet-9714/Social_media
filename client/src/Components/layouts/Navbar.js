import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="/">
          <i class="fas fa-code"></i> DevConnector
        </a>
      </h1>
      <ul>
        <li>
          <a href="!#">Developers</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
