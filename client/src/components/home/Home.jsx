import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Subscribe from "../subscribe/Subscribe";
import PaymentInfo from "../paymentInfo/PaymentInfo";
import NavBar from "../navbar/NavBar";
import Carrusel from "../Carrusel/Carrusel";

import AboutMe from "./../AboutMe/AboutMe";
import Welcome from "./../welcome/Welcome";

// import MapProducts from "../mapProducts/MapProducts";
import { useDispatch } from "react-redux";
import { getOutsandingProducts } from "../../actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOutsandingProducts());
  }, [dispatch]);


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
        <AboutMe/>
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
