import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToCart, SumToCart } from "../../actions"
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
  const [carrito,setCarrito] = useState()
  const dispatch = useDispatch()
  const [currentUser,setCurrentUser] = useState("")
  const [cart,setCart] = useSelector(state=>state.cart)

  //seteo de estados
  useEffect(() => {
    setCurrentUser((JSON.parse(localStorage.getItem("currentUser"))));
    console.log(currentUser)
    // if (currentUser.userId) {
    //   let userId = currentUser.userId
    //   dispatch(getToCart())
    //   setCarrito(cart);
    //   console.log(cart)
    // }else{
      setCarrito(JSON.parse(localStorage.getItem("carrito")));
    // }
  }, []);

  function handleProduct(product){
    let id = currentUser.userId

    let aux={
      productId : product.id,
      amount : product.price,
      quantity: 1
    }

    let products = cart
    console.log(cart)
    // if(id){
    //   if(!products){
    //     products.push(aux)
    //     dispatch(addToCart(id,products))
    //     alert(`Producto agregado al carrito`)
    //   }else{
    //     let repetidoback = products.find(p=>aux.productId === p.id)    
    //     if(!repetidoback){
    //       dispatch(addToCart(id,products))
    //     }else{
    //       alert("El producto ya está en el carrito");
    //     }
    //   }
    // }else{
      if (!localStorage.getItem("carrito")) {
        let a = [];
        a.push(product);
        localStorage.setItem("carrito", JSON.stringify(a));
        alert(`Producto agregado al carrito`);
      } else {
        let a = [];
        a = JSON.parse(localStorage.getItem("carrito") || []);
        let repetido = a.find((e) => product.id === e.id);
        if (!repetido) {
          a.push(product);
          localStorage.setItem("carrito", JSON.stringify(a));
          alert("Producto agregado al carrito");
        } else {
          alert("El producto ya está en el carrito");
        }
      }
    // }
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
    </div>
  );
}
