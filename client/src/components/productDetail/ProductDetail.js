import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../actions";
import Comments from "./../comments/Comments";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import style from "./ProductDetail.module.css";
import prueba from "./img.jpg";
import NavBarClient from "../navbarClient/NavBarClient";
import Swal from "sweetalert2";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.product);

  const [accessToken, setAccessToken] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  //seteo de estados
  useEffect(() => {
    setAccessToken(JSON.parse(localStorage.getItem("accessToken")));
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  function handleProduct(product) {
    if (!localStorage.getItem("carrito")) {
      let a = [];
      a.push(product);
      localStorage.setItem("carrito", JSON.stringify(a));
      Swal.fire(
        "Producto agregado al carrito!",
        "Revisa tu carro de compras",
        "success"
      );
    } else {
      let a = [];
      a = JSON.parse(localStorage.getItem("carrito") || []);
      let repetido = a.find((e) => product.id === e.id);
      if (!repetido) {
        a.push(product);
        localStorage.setItem("carrito", JSON.stringify(a));
        Swal.fire(
          "Producto agregado al carrito!",
          "Revisa tu carro de compras",
          "success"
        );
      } else {
        Swal.fire("Este producto ya ha sido agregado", "", "error");
      }
    }
  }

  return (
    <div className={style.grandContainer}>
      <div>
        <div className={style.container}>
          <div className={style.imagen}>
            {product.image ? (
              <img
                src={product.image}
                alt='imagen1'
                height='450'
                width='450'
                max-width='450'
                max-height='450'
              />
            ) : (
              <img src={prueba} alt={"Imagenotfound1"} />
            )}
            <div className={style.stock}>
              <h3>
                {product.stock > 0 ? (
                  "Productos en Stock: " + product.stock
                ) : (
                  <label>Sin stock</label>
                )}
              </h3>
            </div>
          </div>
          <div className={style.info}>
            <div className={style.name}>
              <h3>{product.name}</h3>
            </div>
            <div className={style.description}>
              <h3>{"Descripcion: "}</h3>
              <h2>{product.description}</h2>
            </div>

            <div className={style.price}>
              <h3>{"$ " + product.price}</h3>
            </div>

            <div className={style.categories}>
              <h3>
                Categoria:{" "}
                <Link to={`/categoria/${product.category}`}>
                  {product.category}
                </Link>
              </h3>
            </div>
            <div className={style.compra}>
              <p>Cómpralo hoy y recíbelo en 48-72hs</p>
            </div>
            <div>
              {product.disabled === "si" ? <p>Producto desabilitado</p> : null}
            </div>
            <div className={style.stock}>
              {product.stock > 0 ? (
                <button
                  onClick={() => handleProduct(product)}
                  className={style.agregar}
                >
                  Añadir al carrito
                </button>
              ) : (
                <Link to={`/producto/${id}`}></Link>
              )}
              <div className={style.editar}>
                {currentUser && currentUser.isAdmin === "si" ? (
                  <Link to={`/editar_producto/${id}`}>Editar Producto</Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className={style.comentarios}>
          <Comments />
        </div>
        <div>
          {currentUser && currentUser.isAdmin === "si" ? (
            <NavBar />
          ) : (
            <NavBarClient />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
