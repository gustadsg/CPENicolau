import React from "react";
import { Form } from "react-bootstrap";
import "../../css/Formulario.css";
import Base from "../../Components/Base";

function Home() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    alert("Formulário de adoção enviado com sucesso!");
  }
  return (
    <Base>
      <div className="formscontainer">
        <h1>Formulário para Adoção</h1>

        <form className="inputs" onSubmit={handleSubmit}>
          {" "}
          {/*entradas de texto e os botões*/}
          <Form.Group onSubmit={handleSubmit}>
            {" "}
            {/*form.group é utilizado para espaçar as caixaas de texto*/}
            <Form.Control
              name="nome"
              type="text"
              placeholder="Nome"
              className="col-12 col-sm-12"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="cpf"
              type="text"
              placeholder="CPF"
              className="col-12 col-sm-12"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="telefone"
              type="phone"
              placeholder="Telefone"
              className="col-12 col-sm-12"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              placeholder="E-mail"
              className="col-12 col-sm-12"
            />
          </Form.Group>
          <Form.Group classname="espacamento1" style={{ marginBottom: "0px" }}>
            <div class="form-row">
              <div class="col-12 col-sm-6 ">
                <Form.Group>
                  <Form.Control
                    name="estado"
                    type="text"
                    placeholder="Estado"
                    required
                  />
                </Form.Group>
              </div>
              <div class="col-12 col-sm-6">
                <Form.Group>
                  <Form.Control
                    name="cidade"
                    type="text"
                    placeholder="Cidade "
                    required
                  />
                </Form.Group>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="espacamento2">
            <div class="form-row">
              <div class="col-12 col-sm-4">
                <Form.Group>
                  <Form.Control
                    name="bairro"
                    type="text"
                    placeholder="Bairro"
                    required
                  />
                </Form.Group>
              </div>
              <div class="col-12 col-sm-4">
                <Form.Group>
                  <Form.Control
                    name="rua"
                    type="text"
                    placeholder="Rua"
                    required
                  />
                </Form.Group>
              </div>
              <div class="col-12 col-sm-4">
                <Form.Group>
                  <Form.Control
                    name="numero"
                    type="number"
                    placeholder="Número"
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline-success cadastro col-12"
              autoFocus
            >
              Cadastro
            </button>
          </Form.Group>
        </form>
      </div>
    </Base>
  );
}

export default Home;
