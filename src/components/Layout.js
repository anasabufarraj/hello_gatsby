import React from 'react'
import NavBar from './navbar'
import Footer from './footer'
import '../../static/global.css' // Important to solve the CSS breakdown when reloading the page

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
