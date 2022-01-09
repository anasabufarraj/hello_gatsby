import React from 'react';
import { Link } from 'gatsby';

function NavBar(props) {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/about">About</Link>&nbsp;|&nbsp;
        <Link to="/projects">Projects</Link>
      </ul>
    </nav>
  );
}

export default NavBar;
