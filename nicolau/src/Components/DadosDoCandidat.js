import React, {useEffect, useReducer, useState} from "react";
import "../css/bootstrap.min.css";
import "../css/candidat.css";
import api from "../services/api";

export default function DadosDoCandidat(props) {
    const [candi, setCandidato] = useState([])
    var user = {
        nome: props.nome,
        cpf: props.cpf,
        telefone: props.telefone,
        email: props.email,
        estado: props.estado,
        cidade: props.cidade,
        bairro: props.bairro,
        rua: props.rua,
        numero: props.numero,
        animal: props.animal
    }
    var propriedades = props
    function botoes(aprov) {
        if (propriedades.botoes == "true") {
            console.log(propriedades.botoes)
            return (
                <div className="buttons">
                    <button type="button" className="btn btn-danger"
                        onClick={
                            () => handleRemove(aprov.id)
                    }>
                        Recusar

                    </button>
                    <button type="button" className="btn btn-success"
                        onClick={
                            () => handleAprova(aprov)
                    }>
                        {" "}
                        Aprovar{" "} </button>
                </div>
            )

        }
        
    };

    useEffect(() => {
        api.get(props.pagina).then(res => {
            setCandidato(res.data)
        })
    }, [])



    const handleAprova = (aprov) => {
        const values = [...candi];
        values.splice(`${
            aprov.id
        }`, 1);
        setCandidato(values);
        api.delete(`users/${
            aprov.id
        }`)
        api.post(`aprovados`, aprov)
        window.location.reload()
    }

    const handleRemove = (id) => {
        const values = [...candi];
        values.splice(`${id}`, 1);
        setCandidato(values);
        api.delete(`users/${id}`)
        window.location.reload()
    }

    return(
        <>
      {
      candi.map( (props) => (
          // <Card_BE info={candidato}>
      <div className="candidat" key={props.id}>
          
          <p>
          <span className="candidat-subtitle">Animal: </span>
          {props.animal}
          </p>
          <div className="field">
          <span className="field-titles">Dados do Candidato</span>
          <p>
              <span className="candidat-subtitle">Nome: </span>
              {props.nome}
          </p>
          <p>
              <span className="candidat-subtitle">CPF: </span>
              {props.cpf}
          </p>
          <p>
              <span className="candidat-subtitle">Telefone: </span>
              {props.telefone}
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
              {props.estado}
          </p>
          <p>
              <span className="candidat-subtitle">Cidade: </span>
              {props.cidade}
          </p>
          <p>
              <span className="candidat-subtitle">Bairro: </span>
              {props.bairro}
          </p>
          <p>
              <span className="candidat-subtitle">Rua: </span>
              {props.rua}
          </p>
          <p>
              <span className="candidat-subtitle">Numero: </span>
              {props.numero}
          </p>
          </div>
  
          {botoes(props)}
         
      </div>
      
      ))
      }
      </>
      )
      
  }