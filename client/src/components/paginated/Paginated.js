import React from "react";
import style from "./Paginated.module.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
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
  //arreglar

  return (
    <div className={style.paginated}>
      <div className={style.paginatedLeft}>
        <button
          onClick={() => prevPage()}
          disabled={currentPage == 1 ? "true" : ""}
        >
          {" "}
          <GrPrevious /> Anterior{" "}
        </button>
      </div>
      <div className={style.paginatedRight}>
        <button
          onClick={() => nextPage()}
          disabled={currentPage == allProducts ? "true" : ""}
        >
          {" "}
          Siguiente <GrNext />{" "}
        </button>
      </div>
    </div>
  );
}
