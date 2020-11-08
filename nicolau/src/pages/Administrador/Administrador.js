import React from 'react';
import Base from "../../Components/Base";
import Candidat from "../../Components/Candidat";
import "../../css/administrador.css";

export default function Admnistrador() {
  return (
    <Base logout='true' adm='true'>
      <div className="container-flex">
        <Candidat pagina="users" botoes="true"/>
       
      </div>
    </Base>
  );
}
