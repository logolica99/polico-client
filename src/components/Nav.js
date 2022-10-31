import React, { useState } from "react";
import whiteLogo from "../assets/icons/white_logo.svg";
import search from "../assets/icons/search.svg";
import cart from "../assets/icons/cart.svg";
import user from "../assets/icons/user.svg";
import add from "../assets/icons/add.svg";
import logout from "../assets/icons/logout.svg";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <div className="nav">
      <div className="nav-wrapper margin-x">
        <div className="nav-wrapper-logo">
          <Link to="/">
            <img src={whiteLogo} alt="" />
          </Link>
        </div>
        <div className="nav-wrapper-search">
          <input type="text" placeholder="Search..." />
          <div className="nav-wrapper-search-button">
            <img src={search} alt="" />
          </div>
        </div>
        <div className="nav-wrapper-cart">
          <Link to="/wishlist">
            <img src={cart} alt="" />
            <div className="item-count">3</div>
          </Link>
        </div>
        {loggedIn ? (
          <div className="nav-wrapper-accountInfo">
            <p>
              Hello,{" "}
              <span
                onMouseOver={() => setShowMenu(true)}
                onMouseOut={() => setShowMenu(false)}
                className
              >
                John Doe
              </span>
            </p>

            <div
              onMouseOver={() => setShowMenu(true)}
              onMouseOut={() => setShowMenu(false)}
              className={`nav-wrapper-accountInfo-menu ${
                showMenu ? "show-menu" : ""
              }`}
            >
              <div className="nav-wrapper-accountInfo-menu-item">
                <img src={user} alt="" />
                <Link to="/account">
                  <p>My Account</p>
                </Link>
              </div>
              <div className="nav-wrapper-accountInfo-menu-item">
                <img src={add} alt="" />
                <Link to="/create-listing">
                  <p>Create new listing</p>
                </Link>
              </div>
              <div className="nav-wrapper-accountInfo-menu-item">
                <img src={logout} alt="" />

                <p className="logout">LOGOUT</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="nav-wrapper-loginButton">
            <Link to="/login">LOGIN</Link>
          </div>
        )}
        {loggedIn ? (
          <FiMenu
            className="nav-wrapper-accountInfo-hamburger"
            onClick={() => {
              setShowSideMenu(!showSideMenu);
            }}
            size={20}
          />
        ) : null}
      </div>
      <div
        className={`${
          showSideMenu ? "nav-sidemenu show-sidemenu" : "nav-sidemenu"
        }`}
      >
        <div className="nav-sidemenu-item">
          <img src={user} alt="" />
          <Link to="/account">My Account</Link>
        </div>
        <div className="nav-sidemenu-item">
          <img src={add} alt="" />
          <Link to="/create-listing">Create new listing</Link>
        </div>
        <div className="nav-sidemenu-item">
          <img src={logout} alt="" />

          <p className="logout">LOGOUT</p>
        </div>
      </div>
    </div>
  );
}
