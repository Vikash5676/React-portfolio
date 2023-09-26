import React, { useState } from "react";
import "../App.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <div className="menu-bar">
        <i class="fa-solid fa-bars" onClick={handleClick}></i>
        <h1>Vikash</h1>
      </div>

      <nav className={showMenu ? "show" : "hide"}>
        <ul>
          <li>
            <a href="#section1">Home</a>
          </li>
          <li>
            <a href="#section3">About</a>
          </li>
          <li>
            <a href="#section1">Hire Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
