import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../actions";
import Comments from "./../comments/Comments";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import style from "./ProductDetail.module.css";
import prueba from "./img.jpg";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.product);

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
            <div className={style.stock}>
              {product.stock > 0 ? (
                <span>Añadir al carrito</span>
              ) : (
                <Link to={`/producto/${id}`}></Link>
              )}

              <div className={style.editar}>
                <Link to={`/editar_producto/${id}`}>
                  <span>Editar producto</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Comments />
        </div>
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

