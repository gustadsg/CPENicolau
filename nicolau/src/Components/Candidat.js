import React, { useEffect, useReducer, useState } from "react";
import "../css/bootstrap.min.css";
import "../css/candidat.css";
import api from "../services/api";
import DadosDoCandidat from "../Components/DadosDoCandidat";


export default function Candidat(props) {

  return (
    <>    
    <DadosDoCandidat pagina={props.pagina} botoes={props.botoes}/>

    </>
  )
}