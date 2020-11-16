import React, { useState } from "react";
import Base from "../../Components/Base";
import Card from "../../Components/Card";
import "../../css/Adote.css";
import api from "../../services/api";

export default function Adote() {
  const initialState = {
    animals: [],
    filtros:{
      cachorro: true,
      gato: true
    }
  }
  var [state, setState] = useState(initialState);
  
  function getData() {
    return api
      .get("http://localhost:3001/animais")
      .then((response) => response.data)
      .then((response) => setState({animals: response}));
  }
  getData();
  const animalsList = state.animals.map((animal) => (
    <Card
      key={animal.id}
      style={{ maxWidth: "300px" }}
      name={animal.nome}
      race={animal.especie}
      gender={animal.sexo}
      age={animal.idade}
      className={animal.especie}
    >
      {animal.descricao}
    </Card>
  ));
  function showDogs() {
    const dogs = document.getElementsByClassName('Cachorro')
    const mostra = document.getElementById('filtroCachorros').checked ? "block" : "none";
    Array.prototype.forEach.call(dogs, dog => {
      dog.style.display=mostra
    });
  }
  function showCats() {
    const cats = document.getElementsByClassName('Gato')
    const mostra = document.getElementById('filtroGatos').checked ? "block" : "none"
    Array.prototype.forEach.call(cats,cat => {
      cat.style.display=mostra
    });
  }


  return (
    <>
      <Base>
        <form className="filter">
          <h4>Filtros:</h4>
          <div className="filter-inputs">
          <label className="container" htmlFor="filtroCachorros">Cachorros
            <input type="checkbox" className="filter-input" name="filtroCachorros" id="filtroCachorros" onClick={showDogs}></input>
            <span className="checkmark"></span>
          </label>
          <label className="container" htmlFor="filtroGatos">Gatos
            <input type="checkbox" className="filter-input" name="filtroGatos" id="filtroGatos" onClick={showCats}></input>
            <span className="checkmark"></span>
          </label>
          </div>
        </form>
        <div className="cards-container">
          {animalsList}
        </div>
      </Base>
    </>
  );
}
