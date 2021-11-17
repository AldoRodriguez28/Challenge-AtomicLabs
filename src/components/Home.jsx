import React from "react";
import HeroSection from "../components/HeroSection";
import Servicios from "../components/Servicios.jsx";
import Procesos from "../components/Procesos";
import WAtomic from "../components/WAtomic";
import Caracteristicas from "../components/Caracteristicas";

function Home() {
  return (
    <div>
      <HeroSection />
      <Servicios id="servicios" />
      <Procesos />
      <WAtomic />
      <Caracteristicas id="caracteristicas" />
    </div>
  );
}

export default Home;
