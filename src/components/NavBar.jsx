import React from "react";
import "./NavBar.css";
import logo from "../assets/logo-blanco-01.png";

function NavBar() {
  return (
    <div className="nav-layout">
      <nav className="navbar">
        <div className="navbar-container">
          <img src={logo} alt="logo blanco" />
          <p>atomicLabs</p>
          {/* <i className=" border-logo fas fa-rocket"></i> <p>atomicLabs</p> */}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
