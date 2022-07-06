import React from "react";
import boxIcon from "./../../images/boxicon.png"
import sendIcon from "./../../images/enviosicon.png"
import MPIcon from "./../../images/MPicon.png"
import payIcon from "./../../images/pagoicon.png"

export default function PaymentInfo(){
    return(
        <div>
            <img src={boxIcon} alt="icon" width="100" height="100"/>
            <p>Envios seguro y discreto</p>
            <img src={sendIcon} alt="icon" width="100" height="100"/>
            <p>Envios a todo el pais</p>
            <img src={MPIcon} alt="icon" width="100" height="100"/>
            <p>Pago seguro a travez de Mercado pago</p>
            <img src={payIcon} alt="icon" width="100" height="100"/>
            <p>Pago contra entrega en Buenos Aires</p>
        </div>
    )
}