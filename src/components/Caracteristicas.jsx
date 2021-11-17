import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import "../components/Caracteristicas.css";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import linkedInk from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import { Link } from "react-router-dom";

function Caracteristicas() {
  const [rows, setRows] = useState([
    {
      caracteristicas: "Equipo inclusivo, honesto y auténtico",
      otros: faCheckCircle,
      atomic: faCheckCircle,
    },
    {
      caracteristicas: "Puntualidad es nuestro segundo nombre",
      otros: faCheckCircle,
      atomic: faCheckCircle,
    },
    {
      caracteristicas: "Siempre innovamos con nuestros pruductos",
      otros: faCheckCircle,
      atomic: faCheckCircle,
    },
    {
      caracteristicas:
        "Te ayudamos a crecer y a implementar nuevos conocimientos",
      otros: "",
      atomic: faCheckCircle,
    },
    {
      caracteristicas: "Nos preocupamos por tu bienestar",
      otros: "",
      atomic: faCheckCircle,
    },
    {
      caracteristicas: "El respesto es una parte fundamental",
      otros: "",
      atomic: faCheckCircle,
    },
  ]);
  console.log(rows);

  return (
    <section id="caracteristicas" className="character-container">
      <div className="filtro-azul">
        <div className="tabla">
          <table>
            <thead>
              <tr>
                <th className="th" scope="col"></th>
                <th className="th" scope="col">
                  CARACTERÍSTICAS
                </th>
                <th className="th" scope="col">
                  OTROS
                </th>
                <th className="th" scope="col">
                  ATOMIC
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr className="row">
                  <td className="blank" scope="row"></td>
                  <td className="td" scope="row">
                    {row.caracteristicas}
                  </td>
                  <td>
                    <FontAwesomeIcon icon={row.otros} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={row.atomic} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="hero-btns">
            <Link to="/step1">
              <button>¡Quiero ser parte!</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-character">
        <div>
          <p>@ 2020 AtomicLabs. Todos los derechos reservados.</p>
        </div>
        <div className="social">
          <a href="">Aviso de privacidad</a>
          <div>
            <img src={linkedInk} />
            <img src={twitter} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Caracteristicas;
