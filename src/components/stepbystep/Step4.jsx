import { React, useState } from "react";
import NavBar from "../NavBar";
import astronauta from "../../assets/Group 4038.png";
import "../stepbystep/Step2.css";
import "../stepbystep/Step4.css";
import icon from "../../assets/Group 4025@2x.png";
import check from "../../assets/Group 4016.png";
import cuatro from "../../assets/Group 4022.png";
import Footer from "../Footer.jsx";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { orange } from "@mui/material/colors";
import { Link } from "react-router-dom";

function Step4() {
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
          <div className="step2-text">
            <div className="step2-container">
              <div className="header-step2">
                <div className="set1-bar">
                  <div className="progress">
                    <div className="progress-grid">
                      <img src={check} alt="" />
                      <img src={check} alt="" className="dos" />
                      <img src={check} alt="" className="tres" />
                      <img src={cuatro} alt="" className="cuatro" />
                    </div>
                    <progress value={step2} max="100"></progress>
                    <Link to="/step3" className="regresar">
                      Regresar
                    </Link>
                  </div>{" "}
                </div>
                <div className="step21-h1">
                  <img src={icon}></img>

                  <h1>
                    TERMINOS Y <span>CONDICIONES </span>{" "}
                  </h1>
                </div>
                <p className="step4-p">
                  Porfavor revisa nuestros términos y condiciones para este
                  servicio:
                  <br />{" "}
                  <a onClick={handleClick}>Consulta Terminos y condiciones</a>
                </p>
              </div>
              <div className="step21-body ">
                <div class="input-icons inner-addon right-addon">
                  <p> </p>
                  <label className="checkbox4">
                    <input type="checkbox" />
                    <span>Acepto los términos y condiciones.</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="step4-astronaut">
            <img src={astronauta}></img>
          </div>
        </div>
        <div className="step2-btns">
          <i class="icon4 fas fa-lock"></i>
          <Link to="/FinalStep">
            <button onClick={handleNext}>Enviar</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Step4;
