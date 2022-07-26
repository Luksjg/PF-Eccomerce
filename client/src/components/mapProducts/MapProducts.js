import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../actions";
import Paginated from "../paginated/Paginated";
import ProductCard from "./../productCard/ProductCard";
import style from "./MapProducts.module.css";
//var carro = [];

export default function MapProducts({
  productsToShow,
  setCurrentPage,
  currentProducts,
}) {
  //estados locales
  const [carrito, setCarrito] = useState([]);
  const dispatch = useDispatch()
  const [currentUser,setCurrentUser] = useState("")

  //seteo de estados
  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setCurrentUser(currentUser);
    }
    setCarrito(carrito);
  }, [productsToShow]);

  function handleProduct(product) {
    if (!localStorage.getItem("carrito")) {
      let a = [];
      let id = currentUser.userId
      a.push(product);
      if(id)// dispatch(addToCart(aux,id))
      localStorage.setItem("carrito", JSON.stringify(a));
      alert("Producto agregado al carrito", product.name);
      // window.location.reload();
    } else {
      let a = [];
      a = JSON.parse(localStorage.getItem("carrito") || []);
      let repetido = a.find((e) => product.id === e.id);
      if (!repetido) {
        a.push(product);
        let id = currentUser.userId
        if(id)// dispatch(addToCart(a,id))
        console.log(a)
        console.log(id)
        localStorage.setItem("carrito", JSON.stringify(a));
        alert("Producto agregado al carrito", product.name);
        // window.location.reload();
      } else {
        alert("El producto ya está en el carrito");
      }
    }
  }

  return (
    <div>
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
      <Paginated
        allProducts={productsToShow.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
