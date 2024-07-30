import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="logo.png" alt="logo" />
          </a>
          <a href="/">Home</a>
          <a href={{ pathname: "/about" }}>About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
        </div>
        <div className="right">
          {user ? (
            <div className="user">
              <img
                src="https://i.pinimg.com/564x/15/47/69/154769c9110b8e5bdfe877898bd0cfa4.jpg"
                alt=""
              />
              <span>Stuart</span>
              <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <a href="/">Sign in</a>
              <a href="/" className="register">
                Sign up
              </a>
            </>
          )}
          <div className="menuIcon">
            <img
              src="menu.png"
              alt=""
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
