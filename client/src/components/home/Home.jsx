import React from "react";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Subscribe from "../subscribe/Subscribe";
import PaymentInfo from "../paymentInfo/PaymentInfo";
import NavBar from "../navbar/NavBar";
import NavBarClient from "../navbarClient/NavBarClient";
import Carrusel from "../Carrusel/Carrusel";

import AboutMe from "./../AboutMe/AboutMe";
import Welcome from "./../welcome/Welcome";

export default function Home() {
  //estados locales
  const [accessToken, setAccessToken] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  //seteo de estados

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, []);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }, []);

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
        {currentUser && currentUser.isAdmin === "si" ? (
          <NavBar />
        ) : (
          <NavBarClient />
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
