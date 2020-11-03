import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import "../../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Base from "../../Components/Base";
import logoescura from "../../assets/Logo Nicolau.png";

function Login() {
  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();
  const history = useHistory();

  function login() {
    if (usuario === "nicolau" && senha === "nicolau123") {
      alert("Bem vindo " + usuario);
      history.push("Administrador");
    } else alert("Usuário ou senha incorreto!");
  }

  return (
    <Base>
      <div className="Login">
        <img src={logoescura} alt="logotipo Nicolau" className="image" />

        <div className="container">
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>
              <div className="titulo">
                <h1>Acessar o sistema</h1>
              </div>
            </Card.Header>

            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="Label1">Nome do Usuário</Form.Label>
                  <Form.Control
                    className="usuario1"
                    style={{ height: "30px" }}
                    type="user"
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="Label2 ">Senha</Form.Label>
                  <Form.Control
                    className="senha1"
                    style={{ height: "30px" }}
                    type="password"
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </Form.Group>
                <button
                  type="button"
                  className="btn btn-outline-success "
                  onClick={login}
                >
                  Fazer Login{" "}
                </button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Base>
  );
}

export default Login;
