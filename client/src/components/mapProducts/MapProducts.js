import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Paginated from "../paginated/Paginated";
import ProductCard from "./../productCard/ProductCard";
import style from "./MapProducts.module.css";

export default function MapProducts({ productsToShow,setCurrentPage,currentProducts }) {


  function handleProduct(product){
    console.log(product)
    let products = JSON.parse(localStorage.getItem("Cart"))
    console.log(localStorage)
    let aux; 
    if(products){
      aux = products.find(p=>p.id === product.id)
      if(aux)alert("Producto ya en carrito")  
    }else{
      products = [product]
    }
    console.log(products)
    // localStorage.setItem("Cart",JSON.stringify(products))
    console.log(localStorage)
  }
  
  useEffect(()=>{

  },[])

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
            <button onClick={()=>handleProduct(product)}>agregar</button>
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
