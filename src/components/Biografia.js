import React from "react";
import "./Biografia.css";
import marcomadureira from "../marcomadureira.jpg"; 

const Biografia = () => {
  return (
    <section className="biografia-section">
      <div className="biografia-content">
        <img
          src={marcomadureira}
          alt="Marco Madureira"
          className="biografia-image"
        />
        <div className="biografia-text">
          <h2>Biografia</h2>
          <p>
            Marco Madureira tem uma longa trajetória de serviços prestados à
            cidade de Gotan city. Com mais de 20 anos de experiência na vida
            pública, ele defende políticas que promovem a igualdade, o
            desenvolvimento sustentável e a inovação.Marco madureira tem como
            como seu maior obstáculo dentro da sociedade um grande problema que
            são os super heróis, focado em acabar com esse mal ele é chamado de
            Robin Hood pelas camadas mais baixas e é um herói para muitos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Biografia;
