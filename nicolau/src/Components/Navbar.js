import React from "react";
import "../css/bootstrap.min.css";
import "../css/navbar.css";
import logo from "../assets/Logo Nicolau SF.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  var adote = "";
  var link = "";

  if (props.adm === "true") {
    link = (
      <li className="nav-item">
        <Link className="nav-link" to="/Aprovados">
          Aprovados
        </Link>
      </li>
    );
  } else {
    link = (
      <li className="nav-item">
        <Link className="nav-link" to="/Administrador">
          Administrador
        </Link>
      </li>
    );
  }

  //   render or not adote button
  if (props.logout === true) {
    adote = "";
  } else {
    adote = (
      <li className="nav-item">
        <Link className="nav-link" to="/Adote">
          Adote
        </Link>
      </li>
    );
    link = "";
  }

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
          {adote}
          {link}
        </ul>
      </nav>
    </>
  );
}
