import React from "react";
import izquierda from "../assets/Group 4041.png";
import centro from "../assets/Group 4042.png";
import derecha from "../assets/Group 4043.png";
import "../components/WAtomic.css";

function WAtomic() {
  return (
    <section id="watomic" className="watomic-container">
      <h1>
        ¿POR QUE <span>ATOMIC?</span>
      </h1>
      <div className="watomic-body">
        {/* ----------------------Izquierda---------------------- */}
        <div className="izquierda">
          <div>
            <img src={izquierda} alt="" />
          </div>
          <div>
            <ul className="handleLista">
              <li>
                <span>
                  Usamos las Tecnologias <br /> mas modernas.
                </span>
              </li>
              <li>
                <span>
                  Inovamos y creamos <br />
                  proyectos retadores
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* ----------------------Centro---------------------- */}
        <div className="centro">
          <img src={centro} alt="" />
          <ul className="handleLista">
            <li>
              <span>
                Trabajamos en equipo <br /> rumbo al exito!
              </span>
            </li>
            <li>
              <span>
                No tenemos codigo de <br />
                vestimenta
              </span>
            </li>
          </ul>
        </div>
        {/* ----------------------Derecha---------------------- */}
        <div className="derecha">
          <img src={derecha} alt="" />
          <ul className="handleLista">
            <li>
              <span>
                Realizamos actividades <br />
                para tu bienestar.
              </span>
            </li>
            <li>
              <span>
                ¡Tenemos un parque <br />
                frente a la oficina!
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="background-images"></div>
    </section>
  );
}

export default WAtomic;
