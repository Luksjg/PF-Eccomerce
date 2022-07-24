import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Paginated from "../paginated/Paginated";
import ProductCard from "./../productCard/ProductCard";
import style from "./MapProducts.module.css";
//var carro = [];

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

  //seteo de estados
  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    setCarrito(carrito);
    console.log(carrito);
  }, []);

  function handleProduct(product) {
    if (!localStorage.getItem("carrito")) {
      var a = [];
      a.push(product);
      localStorage.setItem("carrito", JSON.stringify(a));
      alert("Producto agregado al carrito", product.name);
      window.location.reload();
    } else {
      var a = [];
      a = JSON.parse(localStorage.getItem("carrito") || []);
      let repetido = a.find((e) => product.id == e.id);
      if (!repetido) {
        a.push(product);
        localStorage.setItem("carrito", JSON.stringify(a));
        alert("Producto agregado al carrito", product.name);
        window.location.reload();
      } else {
        alert("El producto ya está en el carrito");
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
            <button onClick={() => handleProduct(product)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
