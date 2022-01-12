import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <React.Fragment>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
