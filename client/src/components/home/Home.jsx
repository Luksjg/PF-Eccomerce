import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Subscribe from "../subscribe/Subscribe";
import PaymentInfo from "../paymentInfo/PaymentInfo";
import NavBar from "../navbar/NavBar";

import AboutMe from "../aboutMe/AboutMe";
import Welcome from "./../welcome/Welcome";

import MapProducts from "../mapProducts/MapProducts";
import { useDispatch, useSelector } from "react-redux";
import { getOutsandingProducts } from "../../actions";
import Carrusel from "../Carrusel/Carrusel";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOutsandingProducts());
  }, [dispatch]);

  const productsToShow = useSelector((state) => state.outsandingProducts);

  return (
    <div>
      <div>
        <Welcome />
      </div>

      {/*   <div>{    <MapProducts productsToShow={productsToShow} /> }</div> */}

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
