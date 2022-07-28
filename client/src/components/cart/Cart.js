import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import style from "./Cart.module.css";
import NavStore from "./../NavStore/NavStore";

import {  guardar, orderToMP, addToCart } from "../../actions"

export default function Cart() {
  const [auxState, setAuxState] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [totalPrice, setTotalPrice] = useState(1);
  const [carrito, setCarrito] = useState();
  const dispatch = useDispatch();

  function changeAmount(product, boolean) {
    if (boolean) {
      product.count += 1;
      handlePrice();
    } else {
      product.count -= 1;
      handlePrice();
    }
  }

  function removeProduct(product) {
    let array = carrito.filter((p) => p.id !== product.id);
    localStorage.setItem("carrito", JSON.stringify(array));
    setCarrito(array);
    let aux = 0;
    setAuxState(aux);
    array && array.map((p) => (aux += p.price * p.count));
    setTotalPrice(aux);
  }

  function cartSubmit() {
    let array = carrito.map((p) => {
      return {
        productId: p.id,
        amount: p.price * p.count,
        quantity: p.count,
      };
    });

    let arraymp = carrito.map((p) => {
      return {
        title: p.name,
        quantity: p.count,
        price: p.price,
      };
    });

    dispatch(guardar(array))
    dispatch(addToCart(array, currentUser.userId))
    dispatch(orderToMP(arraymp))
  }

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setCurrentUser(currentUser);
    }
    setCarrito(JSON.parse(localStorage.getItem("carrito")));
    handlePrice();
  }, [auxState]);

  function handlePrice() {
    let aux = 0;
    setAuxState(aux);
    carrito && carrito.map((p) => (aux += p.price * p.count));
    setTotalPrice(aux);
  }

  return (
    <div>
      <NavStore />

      <div className={style.titulo}>
        <p>Bienvenido {currentUser.username}</p>
      </div>

      {console.log(carrito)}
      <div className={style.containerproducts}>
        <div className={style.container}>
          {carrito?.length > 0 ? (
            carrito?.map((product, i) => {
              return (
                <div className={style.containerglobal}>
                  <div key={i} className={style.container2}>
                    <img
                      src={product.image}
                      alt='product imagen'
                      width='150px'
                      height='150px'
                    />
                    <div className={style.name}>
                      <label>{product.name}</label>
                    </div>

                    <div className={style.count}>
                      <button
                        onClick={() => changeAmount(product, true)}
                        disabled={
                          product.count === product.stock ? true : false
                        }
                      >
                        +
                      </button>

                      <label>{product.count}</label>
                      <button
                        onClick={() => changeAmount(product, false)}
                        disabled={product.count === 1 ? true : false}
                      >
                        -
                      </button>
                    </div>
                    <div className={style.remover}>
                      <label>Remover</label>
                      <button onClick={() => removeProduct(product)}>x</button>
                    </div>
                    <div className={style.price}>
                      <label> ${product.price}</label>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={style.ternario}>
              {" "}
              <h2>Aun no hay nada en tu carrito!</h2>
            </div>
          )}
        </div>
        <div>
          <button onClick={()=>cartSubmit()} disabled={currentUser.userId ? false:true}>
            {currentUser.userId?
            <Link to="/formulario">SIGUIENTE</Link>
            :
            <div>
              No disponible

            </div>

            }
            </button>
        </div>
        <div className={style.priceTotal}>total price: {totalPrice}</div>


        {/*      <div>
          <Link to='/profile'>Historial</Link>
        </div> */}

      <Footer />
    </div>
    </div>
  );
}
