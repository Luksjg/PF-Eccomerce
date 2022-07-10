import React from "react";
import logo from "./logo.png";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={style.contenedor}>
      <div className={style.subCont}>
        <div className={style.logo}>
          <img src={logo} alt='logo' />
        </div>
        <div className={style.box}>
          <h3>Telefono</h3>
          <p>Local: +54 11 6660-0666</p>
          <p>Cel: +54 11 4440-5959</p>
        </div>
        <div className={style.box}>
          <h3>Direccion</h3>
          <p>Avenida siempre viva 123, Springfield</p>
        </div>
        <div className={style.box}>
          <h3>Horarios</h3>
          <p>Lunes a lunes</p>
          <p>07:00 am - 23:00pm</p>
        </div>
        <div className={style.box}>
          <h3>Contacto</h3>
          <p>mibebitofiufiu@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
