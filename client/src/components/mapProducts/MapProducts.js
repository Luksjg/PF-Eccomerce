import React from "react";
import { Link } from "react-router-dom";
import Paginated from "../paginated/Paginated";
import ProductCard from "./../productCard/ProductCard";
import style from "./MapProducts.module.css";
export default function MapProducts({ productsToShow,setCurrentPage,currentProducts }) {



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
