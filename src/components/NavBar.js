import React from 'react';
import { Link } from 'gatsby';

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </ul>
    </nav>
  );
}

export default NavBar;
