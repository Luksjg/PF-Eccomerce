import React from "react";
import boxIcon from "./../../images/boxicon.png";
import sendIcon from "./../../images/enviosicon.png";
import MPIcon from "./../../images/MPicon.png";
import payIcon from "./../../images/pagoicon.png";
import style from "./PaymentInfo.module.css";
export default function PaymentInfo() {
  return (
    <div className={style.contPay}>
      <div className={style.box}>
        <div className={style.boxIcon}>
          <img src={boxIcon} alt='icon' width='100' height='100' />
        </div>
        <div className={style.boxText}>
          <span>Envios seguros y discretos</span>
        </div>
      </div>
      <div className={style.box}>
        <div className={style.boxIcon}>
          <img src={sendIcon} alt='icon' width='100' height='100' />
        </div>
        <div className={style.boxText}>
          <span>Envios a todo el pais</span>
        </div>
      </div>

      <div className={style.box}>
        <div className={style.boxIcon}>
          <img src={MPIcon} alt='icon' width='100' height='100' />
        </div>
        <div className={style.boxText}>
          <span>Pago seguro a travez de Mercado pago</span>
        </div>
      </div>
      <div className={style.box}>
        <div className={style.boxIcon}>
          <img src={payIcon} alt='icon' width='100' height='100' />
        </div>
        <div className={style.boxText}>
          <span>Pago contra entrega en Buenos Aires</span>
        </div>
      </div>
    </div>
  );
}
