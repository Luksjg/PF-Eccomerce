import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Subscribe from "../subscribe/Subscribe";
import PaymentInfo from "../paymentInfo/PaymentInfo";
import NavBar from "../navbar/NavBar";
import AboutMe from "./../AboutMe/AboutMe"
import Welcome from "./../welcome/Welcome"
import MapProducts from "../mapProducts/MapProducts";
import { useDispatch, useSelector } from "react-redux";
import { getOutsandingProducts } from "../../actions";

export default function Home() {
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(getOutsandingProducts()) 
    },[dispatch])

    const productsToShow = useSelector(state=> state.outsandingProducts)
    
    
    return(
    <div>
      <NavBar />
      <div>
        ---------------------------------------------------------------------
      </div>
       <div><Welcome/></div>
            <div>-------------------------------------------------------------------------</div>
            <div><MapProducts productsToShow={productsToShow}/></div>
            <div>-------------------------------------------------------------------------</div>
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
        <AboutMe/>
      </div>
      <div>---------------------------------------------------------------------</div>
      <footer>
        <Footer />
      </footer>
      <div>
        ---------------------------------------------------------------------
      </div>
    </div>
    )
}







