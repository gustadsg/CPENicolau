import React from "react";
import "../css/bootstrap.min.css";
import "../css/candidat.css";

export default function Candidat() {
  function handleConfirm() {
    console.log("clicou em confirmar!");
  }
  function handleDelete() {
    console.log("clicou em excluir!");
  }

  let props = {
    animal: "Mili",
    name: "Gustavo da Silva Gomes",
    cpf: "000000000-00",
    phone: "(77) 99189-4506",
    email: "gustadsg@ufmg.br",
    state: "Bahia",
    city: "Vitoria da Conquista",
    address: "Rua Roberto Marinho, 150",
  };

  return (
    <>
      <div className="candidat">
        <p>
          <span className="candidat-subtitle">Animal: </span>
          {props.animal}
        </p>
        <div className="field">
          <span className="field-titles">Dados do Candidato</span>
          <p>
            <span className="candidat-subtitle">Nome: </span>
            {props.name}
          </p>
          <p>
            <span className="candidat-subtitle">CPF: </span>
            {props.cpf}
          </p>
          <p>
            <span className="candidat-subtitle">Telefone: </span>
            {props.phone}
          </p>
          <p>
            <span className="candidat-subtitle">Email: </span>
            {props.email}
          </p>
        </div>
        <div className="field address">
          <span className="field-titles">Endereço</span>

          <p>
            <span className="candidat-subtitle">Estado: </span>
            {props.state}
          </p>
          <p>
            <span className="candidat-subtitle">Cidade: </span>
            {props.city}
          </p>
          <p>
            <span className="candidat-subtitle">Endereço: </span>
            {props.address}
          </p>
        </div>

        <div className="buttons">
          <button className="btn btn-danger" onClick={handleDelete}>
            {" "}
            Recusar
          </button>
          <button className="btn btn-success" onClick={handleConfirm}>
            {" "}
            Aprovar{" "}
          </button>
        </div>
      </div>
    </>
  );
}
