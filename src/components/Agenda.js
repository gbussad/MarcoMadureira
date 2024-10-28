import React from "react";
import "./Agenda.css";

const Agenda = () => {
  return (
    <div className="agenda-container">
      <h2>Agenda de Campanha</h2>
      <ul>
        <li>
          Evento 1: Caminhada no centro com demolição de prédios- 10/10/2024
        </li>
        <li>Evento 2: Comício em Brideshead - 12/10/2024</li>
        <li>
          Evento 3: Protesto contra demissão em massa- local: Mansão Wayne- 12/10/2024
        </li>
        <li>
          Evento 4: Evento especial para membros do partido- SORRIA HOJE -
          evento colaborativo com patroícinio de grandes empresas como HIHAPPY-
          próximo domingo dia 13/10/2024
        </li>
      </ul>
    </div>
  );
};

export default Agenda;
