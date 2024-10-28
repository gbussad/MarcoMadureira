import React from "react";
import Nav from "./components/Nav";
import Biografia from "./components/Biografia";
import Propostas from "./components/Propostas";
import Agenda from "./components/Agenda";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <section id="biografia">
        <Biografia />
      </section>
      <section id="propostas">
        <Propostas />
      </section>
      <section id="agenda">
        <Agenda />
      </section>
      <Footer />
    </div>
  );
}

export default App;
