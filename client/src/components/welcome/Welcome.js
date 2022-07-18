import React from "react";
import { Link } from "react-router-dom";
import S from "./Welcome.module.css";
import logo from "./logo.png";
export default function Welcome() {
  return (
    <div>
      <div className={S.contImg}>
        <div className={S.before}></div>
        <div className={S.logoN}>
          <img className={S.logo} src={logo} alt='logo' />
        </div>
        <div className={S.contSup}>
          <div className={S.titulo}>
            <h1>HENRY GREENSHOP</h1>
          </div>
          <div className={S.subTitulo}>
            <p>
              {" "}
              El e-commerce más completo en productos para cultivos y grow.{" "}
              <br />
              ¡Hacé tu pedido y obtené un 20% DE DESCUENTO en tu próxima compra!{" "}
            </p>
          </div>
          <div className={S.contBtn}>
            <div>
              <Link to={"/tienda"}>
                <button className={S.btn}>Ver productos</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
