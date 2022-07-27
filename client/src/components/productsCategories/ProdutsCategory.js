import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MapProducts from "../mapProducts/MapProducts";
import { getByCategory, order } from "../../actions";
import Categories from "../categories/Categories";
import Footer from "../footer/Footer";
import style from "./ProdutsCategory.module.css";
import NavStore from "./../NavStore/NavStore";
import LoginBtn from "../navbar/loginBTN/LoginBtn";
import { FiShoppingCart } from "react-icons/fi";
import { getAllProducts } from "../../actions";
import { FiRefreshCw } from "react-icons/fi";
import refresh from "../storePage/refresh.png";

export default function ProductsCategory() {
  const [order1, setOrder1] = useState("null");
  const { category } = useParams();

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

  function handleRefresh() {
    dispatch(getAllProducts());
    setCurrentPage(1);
  }
  useEffect(() => {
    dispatch(getByCategory(category));
  }, [dispatch, category]);

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
          />
        </div>
        <div className={style.columnaC}>
          <Categories />
        </div>
      </div>
      <button onClick={handleRefresh} className={style.refresh}>
        <img src={refresh} alt='refresh' className={style.refreshh} />
      </button>
      <Footer />
    </div>
  );
}
