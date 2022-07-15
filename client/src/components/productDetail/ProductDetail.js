import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../actions";
// import Categories from "../categories/Categories";
import Comments from "./../comments/Comments"
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

  // if(loading){
  //     return(
  //         <div>cargando</div>
  //     )
  // }else{
  return (
    <div>
      <div>
        <NavBar />

        <div className={style.container}>
          {product.image? <img src={product.image} alt="imagen1" height="250" width="250"/> : <img src={prueba} alt={"Imagenotfound1"} />}
          <div className={style.name}>
            <p>{product.name}</p>
          </div>
          <div className={style.price}>
            <p>{"U$D " + product.price}</p>
          </div>
          <div className={style.description}>
            <p>{"Descripcion: " + product.description} </p>
          </div>
          <div className={style.stock}>
            <p>
              {product.stock > 0 ? (
                "Productos en Stock: " + product.stock
              ) : (
                <label>Sin stock</label>
              )}
            </p>
          </div>
          <div className={style.categories}>
            <p>
              Categoria:{" "}
              <Link to={`/categoria/${product.category}`}>
                {product.category}
              </Link>
            </p>
          </div>
        </div>
        <div>
          <Comments/>
        </div>
        <Footer />
      </div>
    </div>
  );
}
// }
