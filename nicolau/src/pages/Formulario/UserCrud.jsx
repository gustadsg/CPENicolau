import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "../../css/Formulario.css";
import Base from "../../Components/Base";
import axios from "axios";

const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: {
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    animal: "",
  },
  list: [],
};

function handleSubmit(event) {
  let inputs = document.querySelectorAll("input");
  event.preventDefault();
  inputs.forEach((input) => {
    input.value = "";
  });
  
}

function mascaraCpf() {
  var inputCpf = document.getElementsByName("cpf")[0];

  if (inputCpf.value.length === 3 || inputCpf.value.length === 7) {
    inputCpf.value += ".";
  }
  if (inputCpf.value.length === 11) {
    inputCpf.value += "-";
  }
}

function mascaraTelefone() {
  var inputTelefone = document.getElementsByName("telefone")[0];
  if (inputTelefone.value.length === 0) {
    inputTelefone.value += "(";
  }
  if (inputTelefone.value.length === 3) {
    inputTelefone.value += ") ";
  }
  if (inputTelefone.value.length === 10) {
    inputTelefone.value += "-";
  }
}


export default class UserCrud extends Component {
  state = { ...initialState };

  componentWillMount() {
    axios(baseUrl).then((resp) => {
      this.setState({ list: resp.data });
    });
  }

  

  save(animal) {
    alert(
      "Formulário de adoção enviado com sucesso! A resposta chegará em seu e-mail."
    );


      const user = this.state.user;
      user.animal = animal;
      const method = user.id ? "put" : "post";
      const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
      axios[method](url, user).then((resp) => {
        const list = this.getUpdatedList(resp.data);
        this.setState({ user: initialState.user, list });
      });
    
  }

  allFilled() {
    if (
      this.state.user.nome &&
      this.state.user.cpf &&
      this.state.user.telefone &&
      this.state.user.email &&
      this.state.user.estado &&
      this.state.user.cidade &&
      this.state.user.bairro &&
      this.state.user.rua &&
      this.state.user.numero
    ) {
      return true;
    }
    return false;
  }

  handleError(){
    alert("por favor, preencha todos os campos antes de enviar o formulário.")
    window.location.reload()
  }

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  
  renderForm() {
    const animal = this.props.match.params.id;
    return (
      <div className="formscontainer">
        <h1>Formulário para Adoção do(a) {animal}</h1>
        <form className="inputs" onSubmit={handleSubmit}>
          {" "}
          <Form.Group>
            {" "}
            <input
              type="text"
              className="form-control"
              name="nome"
              minLength="3"
              value={this.state.user.name}
              onChange={(e) => this.updateField(e)}
              placeholder="Nome"
              required
              autoFocus
            />
          </Form.Group>
          <Form.Group>
            <input
              type="text"
              className="form-control"
              onKeyUp={mascaraCpf}
              maxLength="14"
              minLength="14"
              name="cpf"
              value={this.state.cpf}
              onChange={(e) => this.updateField(e)}
              required
              placeholder="CPF"
            />
          </Form.Group>
          <Form.Group>
            <input
              type="text"
              className="form-control"
              onKeyUp={mascaraTelefone}
              maxLength="15"
              minLength="14"
              name="telefone"
              value={this.state.telefone}
              onClick={mascaraTelefone}
              onChange={(e) => this.updateField(e)}
              required
              placeholder="Telefone"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={(e) => this.updateField(e)}
              required
              placeholder="E-mail"
            />
          </Form.Group>
          <Form.Group className="espacamento1" style={{ marginBottom: "0px" }}>
            <div className="form-row">
              <div className="col-12 col-sm-6 ">
                <Form.Group>
                  <input
                    type="text"
                    className="form-control"
                    name="estado"
                    value={this.state.estado}
                    onChange={(e) => this.updateField(e)}
                    required
                    placeholder="Estado"
                  />
                </Form.Group>
              </div>
              <div className="col-12 col-sm-6">
                <Form.Group>
                  <input
                    type="text"
                    className="form-control"
                    name="cidade"
                    value={this.state.cidade}
                    onChange={(e) => this.updateField(e)}
                    required
                    placeholder="Cidade"
                  />
                </Form.Group>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="espacamento2">
            <div className="form-row">
              <div className="col-12 col-sm-4">
                <Form.Group>
                  <input
                    type="text"
                    className="form-control"
                    name="bairro"
                    value={this.state.bairro}
                    onChange={(e) => this.updateField(e)}
                    required
                    placeholder="Bairro"
                  />
                </Form.Group>
              </div>
              <div className="col-12 col-sm-4">
                <Form.Group>
                  <input
                    type="text"
                    className="form-control"
                    name="rua"
                    value={this.state.rua}
                    onChange={(e) => this.updateField(e)}
                    required
                    placeholder="Rua"
                  />
                </Form.Group>
              </div>
              <div className="col-12 col-sm-4">
                <Form.Group>
                  <input
                    type="number"
                    className="form-control"
                    name="numero"
                    value={this.state.numero}
                    onChange={(e) => this.updateField(e)}
                    placeholder="Número"
                  />
                </Form.Group>
              </div>
            </div>
            <Form.Group style={{ display: "none" }}>
              <input
                type="text"
                className="form-control"
                name="animal"
                value={this.props.match.params.id}
                onChange={(e) => this.updateField(e)}
                required
                placeholder="Nome do pet desejado"
              />
            </Form.Group>
            <button
              onClick={() => {
                this.allFilled() ?
                this.save(animal) :
                this.handleError()
              }}
              type="submit"
              className="btn btn-outline-success cadastro col-12"
              style={{margin:"0"}}
            >
              Cadastro
            </button>
          </Form.Group>
        </form>
      </div>
    );
  }

  render() {
    return <Base>{this.renderForm()}</Base>;
  }
}
