import { getToCart } from "../../actions";

import style from "./Cart.module.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { getToCart } from "../../actions"
import Footer from "../footer/Footer";
import NavStore from "../NavStore/NavStore";

export default function Cart() {
  const [auxState, setAuxState] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [totalPrice, setTotalPrice] = useState(1);
  const [carrito, setCarrito] = useState();
  // const [loading,setLoading] = useState(false)
  // const cart  = useSelector(state=>state.cart)
  // const dispatch = useDispatch()

  function changeAmount(product, boolean) {
    let aux = product.count;
    // if(currentUser){
    if (boolean) {
      product.count += 1;
      handlePrice();
    } else {
      product.count -= 1;
      handlePrice();
      // }
    }
  }

  function removeProduct(product) {
    // console.log(product)
    let array = carrito.filter((p) => p.id !== product.id);
    localStorage.setItem("carrito", JSON.stringify(array));
    setCarrito(array);
  }

  function cartSubmit() {
    console.log(carrito);
    let array = carrito.map((p) => {
      return {
        productId: p.id,
        amount: p.price * p.count,
        quantity: p.count,
      };
    });
    console.log(array);
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

  // } David estuvo aqui

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
                      <button onClick={() => removeProduct()}>x</button>
                    </div>
                    <div className={style.price}>
                      <label> ${product.price}</label>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Loadig</div>
          )}
        </div>
      </div>
      <div>total price: {totalPrice}</div>
      <div>{/* <button onClick={()=>handleCart()}>COMPRAR</button> */}</div>
      <div>
        <Link to='/profile'>Historial</Link>
      </div>

      <Footer />
    </div>
  );
}
