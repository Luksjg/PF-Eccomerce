import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../categories/Categories";
import Footer from "../footer/Footer";
import MapProducts from "../mapProducts/MapProducts";

import { getAllProducts } from "../../actions";

import style from "./StorePage.module.css";
import NavStore from "../NavStore/NavStore";

export default function StorePage() {
  const dispatch = useDispatch();

  const productsToShow = useSelector((state) => state.products);

  // function handleSort(e) {
  //   dispatch(order(e.target.value));
  // }

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <NavStore />

      {/* <div className={style.container}>
        <select onChange={(e) => handleSort(e)}>
          <option value='asc'>Orden alfabetico</option>
          <option value='desc'>Orden alfabetico descendente</option>
          <option value='maxPrice'>Menor precio</option>
          <option value='minPrice'>Mayor precio</option>
          <option value='maxValoration'>Mayor valoracion</option>
          <option value='minValoration'>Menor valoracion</option>
        </select>
      </div> */}

      <div className={style.columnaContainer}>
        <div className={style.columna}>
          <MapProducts productsToShow={productsToShow} />
        </div>
        <div className={style.columnaC}>
          <Categories />
        </div>
      </div>

      <Footer />
    </div>
  );
}
