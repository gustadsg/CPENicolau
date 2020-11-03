import React from "react";
import "../css/bootstrap.min.css";
import "../css/navbar.css";
import logo from "../assets/Logo Nicolau.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-dark">
        <Link className="" to="/">
          <img src={logo} alt="logotipo Nicolau" className="navbar-logo" />
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active adote-btn">
            <Link className="nav-link " to="/Adote">
              Adote <span class="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
