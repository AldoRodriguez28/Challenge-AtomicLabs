import React from "react";
import NavBar from "./NavBar";
import astronauta from "../assets/group4032.png";
import "../components/HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";

function HeroSection() {
  return (
    <div className="hero-container">
      <Link to="/">
        <NavBar />
      </Link>
      <div className="layout-padre">
        <div className="hero-layout">
          <div className="hero-astronaut">
            <img src={astronauta}></img>
          </div>
          <div className="hero-text">
            <h1>
              <a className="child-1">Desarrolla todo</a> <br />
              <a className="child-2">
                <span>tu POTENCIAL</span>
              </a>
              <br />{" "}
              <a className="child-3">
                dentro del equipo <br />
                <a className="child-4">
                  <span>ATOMIC</span>LABS
                </a>
              </a>
            </h1>

            <div className="hero-btns">
              <Link to="/step1">
                <button>¡Quiero ser parte!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-pelota">
        <ScrollIntoView selector="#caracteristicas">
          <FontAwesomeIcon icon={faChevronDown} />
        </ScrollIntoView>
        <p className="btn-p">Quiero Saber mas</p>
      </div>
      {/* <div className="pelota hero-btns">
          <Button></Button>
        </div> */}
    </div>
  );
}

export default HeroSection;
