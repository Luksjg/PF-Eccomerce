import React from "react";
import style from "./Paginated.module.css";

export default function Paginated({ allProducts, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allProducts / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={style.paginado}>
        {pageNumbers.length > 1 &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button
                className={style.numeros}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
