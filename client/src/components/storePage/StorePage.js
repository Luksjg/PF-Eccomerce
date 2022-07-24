import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../categories/Categories";
import Footer from "../footer/Footer";
import MapProducts from "../mapProducts/MapProducts";
import LoginBtn from "../navbar/loginBTN/LoginBtn";
import { FiShoppingCart } from "react-icons/fi";
import { getAllProducts, order } from "../../actions";

import style from "./StorePage.module.css";
import NavStore from "../NavStore/NavStore";

export default function StorePage() {
  const [order1, setOrder1] = useState("null");

  const dispatch = useDispatch();

  let aux = useSelector((state) => state.products);
  let productsToShow = aux.filter((p) => p.disabled === "no");

  const [currentPage, setCurrentPage] = useState(1);

  let productsPage = 8;
  order1 ? (productsPage = 8) : (productsPage = 8);
  const LastProduct = currentPage * productsPage;
  const FirstProduct = LastProduct - productsPage;
  const currentProducts = productsToShow.slice(FirstProduct, LastProduct);

  function handleSortA(e) {
    dispatch(order(e));
    setOrder1(e);
    setCurrentPage(1);
  }
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }
  function prevPage() {
    setCurrentPage(currentPage - 1);
  }
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <NavStore setCurrentPage={setCurrentPage} />
      <div className={style.containerDos}>
        <div className={style.Selectores}>
          <select onChange={(e) => handleSortA(e.target.value)}>
            <option value='null'>Orden Alfabetico</option>
            <option value='az'>Ascendente</option>
            <option value='za'>Descendente</option>
          </select>
          <select onChange={(e) => handleSortA(e.target.value)}>
            <option value='null'>Precio</option>
            <option value='maxPrice'>Menor precio</option>
            <option value='minPrice'>Mayor precio</option>
          </select>
          <div className={style.usuario}>
            {/*   <Link to='/loginjwt'>
                <label>Login</label>
              </Link> */}
            <LoginBtn />
          </div>
          <div className={style.carrito}>
            <h3>
              <FiShoppingCart />
            </h3>
          </div>
        </div>
      </div>
      <div className={style.columnaContainer}>
        <div className={style.columna}>
          <MapProducts
            productsToShow={productsToShow}
            setCurrentPage={setCurrentPage}
            currentProducts={currentProducts}
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
        <div className={style.columnaC}>
          <Categories />
        </div>
      </div>

      <Footer />
    </div>
  );
}
