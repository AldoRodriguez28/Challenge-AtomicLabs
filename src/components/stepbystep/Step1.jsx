import { React, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import astronauta from "../../assets/step 4033.png";
import "../stepbystep/Step1.css";

import icon from "../../assets/Group 4015@2x.png";

import uno from "../../assets/Group 4014.png";
import dos from "../../assets/Group 4020.png";
import tres from "../../assets/Group 4021.png";
import cuatro from "../../assets/Group 4022.png";

function Step1() {
  let newStep = 0;
  let backStep = 0;

  const [step, setStep] = useState("25");
  const [porspecto, setProspecto] = useState({
    Nombre: "",
    Apellidos: "",
    Telefono: "",
  });

  const handleChange = (event) => {
    setProspecto({ ...porspecto, [event.target.name]: event.target.value });
  };
  const handleNext = () => {
    stepToInt(step);
    setStep(newStep);
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
    stepToIntBack(step);
    setStep(backStep);
    console.log(backStep);
  };

  return (
    <div className="step-container">
      <Link className="navbar-link" to="/">
        <NavBar />
      </Link>
      <div className="layout-padre">
        <div className="step-layout">
          <div className="step-text">
            <div className="step1-container">
              <div className="header-step">
                <div className="set1-bar">
                  <div className="progress">
                    <div className="progress-grid">
                      <img src={uno} alt="" />
                      <img src={dos} alt="" className="dos" />
                      <img src={tres} alt="" className="tres" />
                      <img src={cuatro} alt="" className="cuatro" />
                    </div>
                    <progress value={step} max="100"></progress>
                  </div>{" "}
                </div>
                <div className="step1-h1">
                  <img src={icon}></img>
                  <h1>
                    TE QUEREMOS <span>CONOCER</span>{" "}
                  </h1>
                </div>
                <p className="step1-p">
                  Queremos saber que eres tu, por favor ingresa los siguientes
                  datos:
                </p>
              </div>
              <div className="step1-body ">
                <div class="input-icons inner-addon right-addon">
                  <p>Nombre (s)</p>
                  <i class="icon fas fa-lock"></i>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="Nombre"
                    className="step-inputs input-field"
                    placeholder=""
                  />
                </div>
                <div className="input-icons inner-addon right-addon">
                  <p>Apellidos</p>
                  <i class="icon fas fa-lock"></i>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="Apellidos"
                    className="step-inputs input-field"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="step-astronaut">
            <img src={astronauta}></img>
          </div>
        </div>
        <div className="step-btns">
          <Link to="/step2">
            <button onClick={handleNext} href="#servicios">
              Enviar
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="btn-pelota">
        <p className="btn-p">Quiero Saber mas</p>
      </div> */}
      {/* <div className="pelota step-btns">
          <Button></Button>
        </div> */}
    </div>
  );
}

export default Step1;
