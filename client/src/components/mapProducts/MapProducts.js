import React from "react";
import { Link } from "react-router-dom";
import Paginated from "../paginated/Paginated";
import ProductCard from "./../productCard/ProductCard";
import style from "./MapProducts.module.css";
export default function MapProducts({
  productsToShow,
  setCurrentPage,
  currentProducts,
  prevPage,
  nextPage,
  currentPage,
}) {
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
          </div>
        ))}
      </ul>
    </div>
  );
}
