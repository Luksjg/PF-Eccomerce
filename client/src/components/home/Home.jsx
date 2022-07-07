import React from "react";
import Footer from "../footer/Footer";
import Subscribe from "../subscribe/Subscribe";
import PaymentInfo from "../paymentInfo/PaymentInfo";
import NavBar from "../navbar/NavBar";
import AboutMe from "../aboutMe/AboutMe";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        ---------------------------------------------------------------------
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
      <div>
        ---------------------------------------------------------------------
      </div>
      <footer>
        <Footer />
      </footer>
      <div>
        ---------------------------------------------------------------------
      </div>
    </div>
  );
}
