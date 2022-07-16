import React from "react";
import Footer from "../footer/Footer";
import Subscribe from "../subscribe/Subscribe";
import PaymentInfo from "../paymentInfo/PaymentInfo";
import NavBar from "../navbar/NavBar";
import Carrusel from "../Carrusel/Carrusel";

import AboutMe from "./../AboutMe/AboutMe";
import Welcome from "./../welcome/Welcome";


export default function Home() {

  return (
    <div>
      <div>
        <Welcome />
      </div>
      <Carrusel slide={true} />
      <div>
        <PaymentInfo />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Subscribe />
      </div>
      <div>
        <NavBar />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
