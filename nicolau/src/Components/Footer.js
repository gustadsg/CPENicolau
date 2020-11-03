import React from "react";
import "../css/bootstrap.min.css";
import "../css/footer.css";
import logoescura from "../assets/Logo Nicolau Verde escuro.png";

export default function Footer() {
  return (
    <footer className="main-footer">
      <img src={logoescura} alt="logotipo Nicolau" className="footer-logo" />
      <address>
        <div className="address-item">
          <span className="address-title">Endereço</span>
          <p>rua dos bobs, numero 0</p>
        </div>
        <div className="address-item">
          <span className="address-title">Telefone</span>
          <p>4002-8922</p>
        </div>
        <div className="address-item">
          <span className="address-title">E-mail</span>
          <p>umemailqualquer@email.com</p>
        </div>
      </address>
      <p style={{ color: "#777", opacity: ".5" }}>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </p>
    </footer>
  );
}
