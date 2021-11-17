import { React, useState } from "react";
import NavBar from "../NavBar";
import astronauta from "../../assets/Group 4039.png";
import "../stepbystep/Step2.css";
import "../stepbystep/Step4.css";
import "../stepbystep/FinalStep.css";

import icon from "../../assets/Group 4025@2x.png";
import check from "../../assets/Group 4016.png";
import cuatro from "../../assets/Group 4022.png";
import Footer from "../Footer.jsx";

function FinalStep() {
  let newStep = 0;
  let backStep = 0;

  const [step2, setStep2] = useState("100");
  const [porspecto, setProspecto] = useState({
    Nombre: "",
    Apellidos: "",
    Telefono: null,
  });

  const handleClick = () => {};

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
          <div className="step2-text finalStep-text">
            <div className="step2-container">
              <div className="header-step2">
                <div className="set1-bar"></div>
                <div className="stepFinal stepFinal-h1 ">
                  <h1>
                    TUS DATOS <br />
                    <span>
                      HAN SIDO ENVIADOS <br /> CON EXITO{" "}
                    </span>{" "}
                  </h1>
                </div>
                <p className="stepFinal-p">
                  En breve recibiras un correo de confirmación
                  <br /> por parte del equipo de AtomicLabs
                </p>
                <a className="stepFinal-a" onClick={handleClick}>
                  <br />
                  Recuerda revisar tu bandeja de SPAM <br />
                  !Esperamos verte pronto¡
                </a>
              </div>
            </div>
          </div>

          <div className="step4-astronaut">
            <img src={astronauta}></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FinalStep;
