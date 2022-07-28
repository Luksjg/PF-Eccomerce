import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToCart, addToCart } from "../../actions";
import Paginated from "../paginated/Paginated";
import ProductCard from "./../productCard/ProductCard";
import style from "./MapProducts.module.css";
//var carro = [];
import Swal from "sweetalert2";

export default function MapProducts({
  productsToShow,
  setCurrentPage,
  currentProducts,
  currentPage,
  prevPage,
  nextPage,
}) {
  //estados locales
  const [carrito, setCarrito] = useState([]);
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState("");
  const cart = useSelector((state) => state.cart);

  //seteo de estados
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // if (currentUser.userId) {
    //   setCurrentUser(currentUser)
    //   dispatch(getToCart())
    //   setCarrito(cart);
    // }else{
    setCarrito(JSON.parse(localStorage.getItem("carrito")));
    // }
  }, []);

  function handleProduct(product) {
    //let id = currentUser.userId;
    if (!localStorage.getItem("carrito")) {
      let a = [];
      a.push(product);
      localStorage.setItem("carrito", JSON.stringify(a));
      Swal.fire(
        "Producto agregado al carrito!",
        "Revisa tu carro de compras",
        "success"
      );
      /*       window.location.reload(); */
    } else {
      let a = [];
      a = JSON.parse(localStorage.getItem("carrito") || []);
      let repetido = a.find((e) => product.id == e.id);
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
    <div>
      <Paginated
        allProducts={productsToShow.length}
        setCurrentPage={setCurrentPage}
        currentProducts={currentProducts}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <ul className={style.container}>
        {currentProducts.map((product) => (
          <div key={product.id}>
            <Link to={"/producto/" + product.id}>
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                stock={product.stock}
              />
            </Link>
            <div className={style.agregar}>
              <button onClick={() => handleProduct(product)}>
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </ul>
      <div className={style.pagination}>
        <Paginated
          allProducts={productsToShow.length}
          setCurrentPage={setCurrentPage}
          currentProducts={currentProducts}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </div>
  );
}
