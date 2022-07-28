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
    let id = currentUser.userId;
    // let aux = {
    //   id: product.id,
    //   name: product.name,
    //   stock: product.stock,
    //   image: product.image,
    //   price: product.price,
    //   category: product.category,
    //   orderline: {
    //     amount: product.price,
    //     quantity: 1
    //   }
    // }

    // if(id){
    //   if(carrito?.length === 0){
    //     setCarrito([...carrito,aux])
    //     console.log("el carrito esta vacio", carrito)
    //     dispatch(addToCart(carrito,id))
    //     alert(`Producto agregado al carrito`)
    //   }else{
    //     let repetidoback = carrito.find(p=>aux === p)
    //     console.log(repetidoback, "este producto esta repetido")
    //     if(!repetidoback){
    //       console.log("agregado al carrito", carrito)
    //       setCarrito([...carrito,aux])
    //       // console.log(carrito)
    //       dispatch(addToCart(carrito,id))
    //     }else{
    //       alert("El producto ya está en el carrito");
    //     }
    //   }
    // }else{
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
      Swal.fire("Este producto ya ha sido agregado", "", "error");
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
