import React from "react";
import { Link } from "react-router-dom";
import style from "./Page404.module.css";
import cuatro from "./404-image.6e91a0a9-removebg-preview.png";

export default function Page404() {
  return (
    <div className={style.container}>
      <div className={style.numero}>
        <img src={cuatro} alt='404' />
      </div>
      <div className={style.texto}>
        <h1>Page not found</h1>
      </div>
      <div className={style.boton}>
        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}
