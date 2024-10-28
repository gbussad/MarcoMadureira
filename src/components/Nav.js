import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <h1>
        <em>Marco Madureira 13</em> <span className="star">★</span>
      </h1>
      <ul>
        <li>
          <a href="#biografia">Biografia</a>
        </li>
        <li>
          <a href="#propostas">Propostas</a>
        </li>
        <li>
          <a href="#agenda">Agenda</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
