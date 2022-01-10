import React from 'react';
import { Link } from 'gatsby';

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
