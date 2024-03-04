import React, { useState } from 'react'
import "../navbar.css"
import logo from "../logo.png"

const Navbar = () => {
  const [active, setActive] = useState('nav_menu')
  const [toggleIcon, setToggleIcon] = useState("nav_toggler")

  const navToggle = () => {
    setActive(active === "nav_menu" ? "nav_menu nav_active" : "nav_menu")
    setToggleIcon(toggleIcon === "nav_toggler" ? "nav_toggler toggle" : "nav_toggler")
  }

  return (
    
    <nav className="nav">

      {/* brand name */}
      
        <a href="/" className="brand">
        <img src={logo} alt="Logo" className="logo" />
        <div>trivia</div>
        </a>

      {/* Navigation menu */}
      <ul className={active}>
        <li className="nav_item"><a href="/" className="nav_link">Home</a></li>
        <li className="nav_item"><a href="/about" className="nav_link">About</a></li>
        <li className="nav_item"><a href="/help" className="nav_link">Help</a></li>
        <li className="nav_item"><a href="/faq" className="nav_link">FAQ</a></li>
        <li className="nav_item"><a href="/" className="logout">Logout</a></li>
      </ul>

      {/* Hamburger menu */}
      <div className={toggleIcon} onClick={navToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar