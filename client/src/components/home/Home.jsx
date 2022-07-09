import React from "react";
import Footer from "../footer/Footer";
import Subscribe from "../subscribe/Subscribe";
import PaymentInfo from "../paymentInfo/PaymentInfo";
import NavBar from "../navbar/NavBar";
import AboutMe from "../aboutMe/AboutMe";
import Welcome from "./../welcome/Welcome.js";
import MapProducts from "../mapProducts/MapProducts";

export default function Home() {
  return (
    <div>
      <Welcome />

      <div>
        ---------------------------------------------------------------------
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        -------------------------------------------------------------------------
      </div>
      <div>
        <MapProducts />
      </div>
      <div>
        -------------------------------------------------------------------------
      </div>
      <div>
        <Subscribe />
      </div>
      <div>
        ---------------------------------------------------------------------
      </div>
      <div>
        <PaymentInfo />
      </div>
      <div>
        ---------------------------------------------------------------------
      </div>
      <div>
        <AboutMe />
      </div>
      {/* <div>
        ---------------------------------------------------------------------
      </div> */}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
