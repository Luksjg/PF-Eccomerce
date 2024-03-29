/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./Carrusel.module.css";
import ProductCard from "../productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOutsandingProducts } from "../../actions";
import Aos from "aos";
import "aos/dist/aos.css";

const Carrusel = ({ slides }) => {
  const carrusel = useRef(document.createElement("div"));
  const slidesContainer = useRef(document.createElement("div"));
  const [state, setState] = useState(0);
  const dispatch = useDispatch();

  const gap = 10; //in px
  const slideWidth = 270; //in px, width of the card
  const numberOfSlides = slidesContainer.current.children.length;

  const getScrollPosition = (arg) => {
    const maxScroll =
      (slideWidth + gap) * numberOfSlides - carrusel.current.offsetWidth;

    if (arg === "forward") {
      const x = state + slideWidth + gap;
      return x <= Math.abs(maxScroll) ? x : 0;
    } else if (arg === "backward") {
      const x = state - slideWidth - gap;
      return x >= 0 ? x : maxScroll;
    } else if (typeof arg === "number") {
      const x = arg * (slideWidth + gap);
      return x;
    }
    return 10;
  };

  useEffect(() => {
    dispatch(getOutsandingProducts());

    const slides = slidesContainer.current;
    window.addEventListener("resize", () =>
      setState(() => {
        slides.style.transform = `translateX(-${getScrollPosition(0)}px)`;
        return getScrollPosition(0);
      })
    );
  }, []);

  const productsToShow = useSelector((state) => state.outsandingProducts);

  function handleClick(arg) {
    return function () {
      const slides = slidesContainer.current;
      setState(() => {
        slides.style.transform = `translateX(-${getScrollPosition(arg)}px)`;
        return getScrollPosition(arg);
      });
    };
  }
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <>
      <div className={styles.texto}>
        <h1>¡Productos destacados!</h1>
      </div>
      <div className={styles.container} ref={carrusel} data-aos='fade-up'>
        {
          <>
            <button
              onClick={handleClick("forward")}
              className={`${styles.btn} ${styles.right}`}
            >
              →
            </button>
            <button
              onClick={handleClick("backward")}
              className={`${styles.btn} ${styles.left}`}
            >
              ←
            </button>
          </>
        }
        <div className={styles.inner} ref={slidesContainer}>
          {productsToShow?.map((e, i) => {
            return (
              <div className={styles.pasarela} key={i}>
                <Link to={"/producto/" + e.id}>
                  <ProductCard
                    key={i}
                    id={e.id}
                    image={e.image}
                    name={e.name}
                    price={e.price}
                    stock={e.stock}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        <Link to={"/tienda"}>
          <button className={styles.botonProduct}>Todos los productos</button>
        </Link>
      </div>
    </>
  );
};

export default Carrusel;
