import React from "react";
import "../components/Footer.css";
import linkedInk from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <secti className="footer-character">
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
    </secti>
  );
}

export default Footer;
