import React from "react";
import { Link } from "react-router-dom";
import blueLogo from "../assets/icons/blue_logo.svg";

export default function Footer() {
  return (
    <div className="footer margin-x">
      <p className="credit">
        Made with 💗 by <a href="https://github.com/logolica99">logolica99</a>
      </p>

      <Link to="/">
        <img src={blueLogo} alt="" />
      </Link>
    </div>
  );
}
