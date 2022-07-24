import { React } from "react";
import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";

export default function ProductCard({ id, image, name, price, stock }) {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img
          src={image}
          alt="imagen no encontrada"
          width="250px"
          height="300px"
        />
      </div>
      <div className={style.titulo}>
        <h3>{name}</h3>
      </div>
      <div className={style.precio}>
        <h3>{"$ " + price}</h3>
      </div>
      <div className={style.stock}>
        {/* {stock > 0 ? (
          <button onClick={() => handleProduct(id)}>Agregar al carrito</button>
        ) : (
          <Link to={`/producto/${id}`}>Ver producto</Link>
        )} */}
      </div>
    </div>
  );
}
