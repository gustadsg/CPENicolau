import React from "react";
import Base from "../../Components/Base";
import Candidat from "../../Components/Candidat";
import "../../css/administrador.css";

export default function Admnistrador() {
  return (
    <Base>
      <div className="container-flex">
        <Candidat />
        <Candidat />
        <Candidat />
        <Candidat />
        <Candidat />
      </div>
    </Base>
  );
}
