import React from "react";
import Base from "../../Components/Base";
import Slider from "../../Components/Slider";
import "../../css/home.css";
import "../../slick-1.8.1/slick/slick-theme.css";

export default function Home() {
  return (
    <Base>
      <section id="historia">
        <h2>História</h2>
        <p>
          A história do “Nicolau” começou em 2015, quando as irmãs Adriane e
          Olga Silva de Oliveira resgataram o primeiro filhote, vítima de maus
          tratos. As irmãs decidiram cuidar do cãozinho, nomeado Nicolau, e com
          o tempo decidiram adotá-lo. No intuito de ajudar mais cãezinhos como
          ele, começaram um projeto de resgate de animais. Cães e gatos em
          situação de rua ficavam no quintal da casa delas até encontrarem um
          lar definitivo, eram alimentados, vacinados e acompanhados por um
          veterinário local. Todos os custos eram financiados pelas irmãs e
          pelos amigos familiarizados com o projeto.
        </p>
        <p>
          Em 2016, o Nicolau® comprou uma propriedade em Belo Horizonte para
          prover abrigo para mais animais. Em 2017, o projeto foi oficializado
          como uma ONG. Atualmente a ONG já ajudou mais de 102 cães e gatos a
          encontrarem um lar, e conta com a ajuda de mais de 27 voluntários.
        </p>

        <Slider className="slider-container">
          <div>
            <img src={require("../../assets/banner 1.png")} alt="" />
          </div>
          <div>
            <img src={require("../../assets/banner 2.png")} alt="" />
          </div>
          <div>
            <img src={require("../../assets/banner 3.png")} alt="" />
          </div>
        </Slider>

        <p id="slider-description">
          Nicolau, o adorável cãozinho que motivou a criação da ONG, muito feliz
          em sua casa desde que foi adotado! Exceto durante os banhos...
        </p>
      </section>

      <section id="missao">
        <h2>Nossa Missão</h2>
        <p>
          Nossa missão é espalhar o máximo de alegria e solidariedade para os
          animais e suas famílias adotivas.{" "}
        </p>
      </section>

      <section id="valores">
        <h2>Nossos Valores</h2>
        <div className="valores-container">
          {/* <Slider > */}
          <article className="card-valores">
            <img src={require("../../assets/garra.jpg")} alt="" />
            <p>Garra todo dia</p>
          </article>

          <article className="card-valores">
            <img src={require("../../assets/empathy.webp")} alt="" />
            <p>Empatia</p>
          </article>

          <article className="card-valores">
            <img src={require("../../assets/respect.jpeg")} alt="" />
            <p>Respeito</p>
          </article>

          <article className="card-valores">
            <img src={require("../../assets/dedication.jpg")} alt="" />
            <p>Dedicação</p>
          </article>
          {/* </Slider>    */}
        </div>
      </section>
    </Base>
  );
}
