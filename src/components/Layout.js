import React from 'react'
import NavBar from './navbar'
import Footer from './footer'
import '../../static/global.css' // Important to solve the CSS breakdown when reloading the page

function Layout({ children }) {
  return (
    <React.Fragment>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
