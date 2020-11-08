import React from "react";
import "../css/bootstrap.min.css";
import "../css/candidat.css";
import DadosDoCandidat from "../Components/DadosDoCandidat";


export default function Candidat(props) {

  return (
    <>    
    <DadosDoCandidat pagina={props.pagina} botoes={props.botoes}/>

    </>
  )
}