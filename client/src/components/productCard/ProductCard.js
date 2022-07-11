import React from "react";
// import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import imagen from "./img.jpg";
import style from "./ProductCard.module.css";

export default function ProductCard({ id, img, name, price, stock }) {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img
          src={imagen}
          alt='imagen no encontrada'
          width='250px'
          height='300px'
        />
      </div>
      <div className={style.titulo}>
        <h3>{name}</h3>
      </div>
      <div className={style.precio}>
        <h5>{"$ " + price}</h5>
      </div>
      <div className={style.stock}>
        {stock > 0 ? (
          <button>Añadir al carrito</button>
        ) : (
          <Link to={`/producto/${id}`}>Ver producto</Link>
        )}
      </div>
    </div>
  );
}
