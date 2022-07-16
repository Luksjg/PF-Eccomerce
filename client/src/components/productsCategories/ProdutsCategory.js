import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MapProducts from "../mapProducts/MapProducts";
import { getByCategory } from "../../actions";
import Categories from "../categories/Categories";
import Footer from "../footer/Footer";
import style from "./ProdutsCategory.module.css";
import NavStore from "./../NavStore/NavStore"

export default function ProductsCategory(){

    const {category} = useParams()

    const dispatch = useDispatch()

    const productsToShow = useSelector(state=> state.products)


    useEffect(()=>{
        dispatch(getByCategory(category)) 
      },[dispatch,category])


      return (
        <div className={style.container}>
          <NavStore />
    
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