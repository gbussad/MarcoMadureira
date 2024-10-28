import React from "react";
import "./Propostas.css";
import mcoringaProposta from "../mcoringaProposta.jpg"; 
import coringAhelp from "../coringAhelp.jpeg"; 
import coringaTV from "../coringaTV.jpeg"; 

const Propostas = () => {
  return (
    <section className="propostas-section">
      <h2>Propostas</h2>
      <div className="propostas-cards">
        <div className="card">
          <img src={mcoringaProposta} alt="Proposta 1" className="card-image" />
          <h3>Renovação de hospitais</h3>
          <p>
            Melhorar o sistema de saúde pública e garantir atendimento de
            qualidade. Demolir hospitais inutilizados e criar novas unidades de
            UPA.
          </p>
        </div>
        <div className="card">
          <img src={coringAhelp} alt="Proposta 2" className="card-image" />
          <h3>Ajuda aos Órfãos</h3>
          <p>
            Implementar políticas públicas para segurança e bem-estar de
            crianças órfãos e conseguir fazê-las sorrir novamente.
          </p>
        </div>
        <div className="card">
          <img src={coringaTV} alt="Proposta 3" className="card-image" />
          <h3>Investir em Entretenimento</h3>
          <p>
            Em uma aparição histórica a um programa de TV, Marco Madureira diz
            que hávera mais entretenimeto em sua goverância e que haverá mais
            programas como este e situações inusitadas como a qual podemos
            acompanhar em primeira mão.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Propostas;
