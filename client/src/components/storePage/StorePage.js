import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../categories/Categories";
import Footer from "../footer/Footer";
import MapProducts from "../mapProducts/MapProducts";

import { getAllProducts, order} from "../../actions";

import style from "./StorePage.module.css";
import NavStore from "../NavStore/NavStore";

export default function StorePage() {
  const [order1, setOrder1] = useState("null")

  const dispatch = useDispatch();

  const productsToShow = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);

  let productsPage = 8;
  order1 ? productsPage=8 : productsPage = 8
  const LastProduct = currentPage * productsPage;
  const FirstProduct = LastProduct - productsPage;
  const currentProducts = productsToShow.slice(FirstProduct, LastProduct);

  function handleSortA(e){
    dispatch(order(e))
    setOrder1(e)
    setCurrentPage(1)
  }

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <NavStore setCurrentPage={setCurrentPage}/>
      <div>
      <select onChange={(e) => handleSortA(e.target.value)}>
              <option value='all'>Sorts</option>
              <option value='az'>Ascendente</option>
              <option value='za'>Descendente</option>
              <option value='maxPrice'>Menor precio</option>
              <option value='minPrice'>Mayor precio</option>
              {/* <option value='maxValoration'>Mayor valoracion</option>
              <option value='minValoration'>Menor valoracion</option> */}
            </select>
      </div>

      <div className={style.columnaContainer}>
        <div className={style.columna}>
          <MapProducts productsToShow={productsToShow} setCurrentPage={setCurrentPage} currentProducts={currentProducts}/>
        </div>
        <div className={style.columnaC}>
          <Categories />
        </div>
      </div>

      <Footer />
    </div>
  );
}
