import React, { Component } from 'react';
import Base from "../../Components/Base";
import Candidat from "../../Components/Candidat";
import "../../css/administrador.css";

export default function Admnistrador() {
  return (
    <Base logout='true'>
      <div className="container-flex">
        <Candidat />
       
      </div>
    </Base>
  );
}
