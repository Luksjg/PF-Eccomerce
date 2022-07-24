import React from "react";
import style from "./Paginated.module.css";

export default function Paginated({
  nextPage,
  prevPage,
  currentPage,
  allProducts,
}) {
  /* const pageNumbers = []; */

  /*   for (let i = 1; i <= Math.ceil(allProducts / 8); i++) {
    pageNumbers.push(i);
  }
 */
  let matematic = allProducts / 8;

  return (
    <div className={style.paginated}>
      <div className={style.paginated__left}>
        <button
          onClick={() => prevPage()}
          disabled={currentPage == 1 ? "true" : ""}
        >
          {" "}
          Anterior{" "}
        </button>
      </div>
      <div className={style.paginated__right}>
        <button
          onClick={() => nextPage()}
          disabled={currentPage == matematic ? "true" : ""}
        >
          {" "}
          Siguiente{" "}
        </button>
      </div>
    </div>
  );
}
