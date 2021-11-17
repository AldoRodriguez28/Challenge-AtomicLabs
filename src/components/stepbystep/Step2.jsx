import { React, useState } from "react";
import NavBar from "../NavBar";
import astronauta from "../../assets/Group 4034.png";
import "../stepbystep/Step2.css";
import icon from "../../assets/Group 4023@2x.png";
import check from "../../assets/Group 4016.png";
import dos from "../../assets/Group 4020.png";
import tres from "../../assets/Group 4021.png";
import cuatro from "../../assets/Group 4022.png";
import Footer from "../Footer.jsx";
import { Link } from "react-router-dom";

function Step2() {
  let newStep = 0;
  let backStep = 0;

  const [step2, setStep2] = useState("50");
  const [porspecto, setProspecto] = useState({
    Nombre: "",
    Apellidos: "",
    Telefono: null,
  });

  const handleChange = (event) => {
    setProspecto({ ...porspecto, [event.target.name]: event.target.value });
  };
  const handleNext = () => {
    stepToInt(step2);
    setStep2(newStep);
    console.log(newStep);
    console.log(porspecto);
  };
  const stepToInt = (prop) => {
    newStep = parseInt(prop, 10) + 25;
    return newStep.toString();
  };
  const stepToIntBack = (prop) => {
    backStep = parseInt(prop, 10) - 25;
    return backStep.toString();
  };
  const regresar = () => {
    stepToIntBack(step2);
    setStep2(backStep);
    console.log(backStep);
  };

  return (
    <div className="step-container">
      <NavBar />
      <div className="layout2-padre ">
        <div className="step2-layout">
          <div className="step2-text">
            <div className="step2-container">
              <div className="header-step2">
                <div className="set1-bar">
                  <div className="progress">
                    <div className="progress-grid">
                      <img src={check} alt="" />
                      <img src={dos} alt="" className="dos" />
                      <img src={tres} alt="" className="tres" />
                      <img src={cuatro} alt="" className="cuatro" />
                    </div>
                    <progress value={step2} max="100"></progress>
                    <Link to="/step1" className="regresar">
                      Regresar
                    </Link>
                  </div>{" "}
                </div>
                <div className="step21-h1">
                  <img src={icon}></img>

                  <h1>
                    VALIDA TU <span>CELULAR </span>{" "}
                  </h1>
                </div>
                <p className="step21-p">
                  Necesitamos validar tu numero para continuar
                </p>
                <p className="step22-p">
                  Ingresa tu numero a 10 digitos y te enviaremos un codigo SMS
                </p>
              </div>
              <div className="step21-body ">
                <div className="input-icons inner-addon right-addon">
                  <p>Numero de Celular</p>

                  <input
                    maxLength="10"
                    onChange={handleChange}
                    type="number"
                    name="Telefono"
                    className="step2-inputs input-field"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="step2-astronaut">
            <img src={astronauta}></img>
          </div>
        </div>
        <div className="step2-btns">
          <Link to="/step3">
            <button
              disabled={!porspecto.Telefono}
              onClick={handleNext}
              href="#servicios"
            >
              Continuar
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Step2;
