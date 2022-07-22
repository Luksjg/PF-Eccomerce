import React from "react";
import { useSelector } from "react-redux";
import Footer from "../footer/Footer";
import Subscribe from "../subscribe/Subscribe";
import PaymentInfo from "../paymentInfo/PaymentInfo";
import NavBar from "../navbar/NavBar";
import NavBarClient from "../navbarClient/NavBarClient";
import Carrusel from "../Carrusel/Carrusel";

import AboutMe from "./../AboutMe/AboutMe";
import Welcome from "./../welcome/Welcome";

export default function Home() {
  const user = useSelector((state) => state.user);
  console.log("user: ", user);
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
      <div>{user && user.is_admin ? <NavBar /> : <NavBarClient />}</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
