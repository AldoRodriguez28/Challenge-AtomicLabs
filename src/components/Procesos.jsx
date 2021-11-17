import React from "react";
import "../components/Procesos.css";
import team from "../assets/Group 4040.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Procesos() {
  return (
    <section id="proceso" className="procesos-container">
      <div className="procesos-header">
        <h1>
          TE ENCANTARÁ <br /> <span>TRABAJAR CON NOSOTROS</span>{" "}
        </h1>
      </div>
      <div className="proceso-img">
        <img src={team} alt="Team AtomicLabs" />
      </div>
      <div className="procesos-footer">
        <p className="uno">
          Contratación <br /> remota
        </p>
        <div className="dos">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <p className="tres">
          Entrevista con <br /> en el área de rh
        </p>
        <div className="cuatro">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <p className="cinco">
          Prueba <br />
          práctica
        </p>
        <div className="seis">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>{" "}
        <p className="siete">
          Entrevistra <br /> técnica
        </p>
      </div>
      <div className="hero-btns">
        <Link to="/step1">
          <button>¡Quiero ser parte!</button>
        </Link>
      </div>
    </section>
  );
}

export default Procesos;
