import React from "react";
import Footer from "../footer/Footer"
import Subscribe from "../subscribe/Subscribe";
import PaymentInfo from "../paymentInfo/PaymentInfo"
import NavBar from "../navbar/NavBar"
import Welcome from "./../welcome/Welcome"

export default function Home(){
    return(
        <>
            <NavBar/>
            <div>-------------------------------------------------------------------------</div>
            <div><Welcome/></div>
            <div>-------------------------------------------------------------------------</div>
            <div><Subscribe/></div>
            <div>-------------------------------------------------------------------------</div>
            <div><PaymentInfo/></div>
            <div>-------------------------------------------------------------------------</div>
            <footer><Footer/></footer>
            <div>-------------------------------------------------------------------------</div>
        </>
    )
}