import React, { useEffect, useReducer, useState } from "react";
import "../css/bootstrap.min.css";
import "../css/candidat.css";
import api from "../services/api";
import DadosDoCandidat from "../Components/DadosDoCandidat";

//comecei a mudança

export default function Candidat() {
  const [candi,setCandidato] = useState([])
  
  useEffect(() => {
    api.get("users")
          .then(res => {
            setCandidato(res.data)
          })
  }, [])

  return (
    <>    
    <DadosDoCandidat info = "candi"
      onChange={event => console.log(event)}
    >
      {/* <button className="btn btn-success" onClick={handleConfirm}>
            {" "}
            Aprovar{" "}
        </button> */}
    </DadosDoCandidat>
    </>
  )
}