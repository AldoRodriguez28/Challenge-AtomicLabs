import React from "react";
import "../components/Servicios.css";
import explora from "../assets/Group 4035.png";
import imagina from "../assets/Group 4036.png";
import conquista from "../assets/Group 4037.png";
import guionBlanco from "../assets/guion-blanco-01.png";
import guionNaranja from "../assets/guion-naranja-01.svg";

function Servicios() {
  return (
    <section id="servicios" className="service-container">
      <div className="service-header">
        <h1 className="header-h1">
          SOMOS EL BRAZO DERECHO
          <br />
          <span>DE LA TECNOLOGIA</span>{" "}
        </h1>
      </div>
      <div className="service-body">
        {/* -------------------Tarjeta Explora---------------- */}
        <div className="card1">
          <img src={explora} alt="" />
          <img className="card-guion" src={guionNaranja} alt="" />

          <h1>EXPLORA</h1>
          <ul>
            <li>
              Innovación y{" "}
              <span>
                creación <br /> tecnológica
              </span>
            </li>
            <li>
              <span>UI/UX</span>
            </li>
            <li>Innovación</li>
          </ul>
        </div>

        {/* -------------------Tarjeta Imagina---------------- */}

        <div className="card2">
          <img src={imagina} alt="" />
          <img className="guion-blanco" src={guionBlanco} alt="guion-Blanco" />
          <h1>IMAGINA</h1>

          <ul className="ul-card2">
            <li>
              <span> Estrategia </span>Digital
            </li>
            <li>
              Big Data & <span>Analysis</span>
            </li>
            <li>
              <span>Consultoria</span> Tecnológica
            </li>
            <li>
              <span>Reducción </span>de costos TI
            </li>
          </ul>
        </div>

        {/* -------------------Tarjeta Conquista---------------- */}

        <div className="card3">
          <img src={conquista} alt="" />
          <img className="card-guion" src={guionNaranja} alt="" />
          <h1>CONQUISTA</h1>
          <ul>
            <li>
              Desarrollo tecnológico
              <span>
                <br />
                a la medida <br />
              </span>
            </li>
            <li>
              <span>Ciberseguridad</span>
            </li>
            <li>
              <span>Servicios de la Nube</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
