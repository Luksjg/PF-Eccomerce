import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MapProducts from "../mapProducts/MapProducts";
import { getByCategory, order } from "../../actions";
import Categories from "../categories/Categories";
import Footer from "../footer/Footer";
import style from "./ProdutsCategory.module.css";
import NavStore from "./../NavStore/NavStore"

export default function ProductsCategory(){
    const [order1, setOrder1] = useState("null")
    const {category} = useParams()

    const dispatch = useDispatch()

    let aux = useSelector(state => state.products)
    let productsToShow = aux.filter(p=>p.disabled === "no")

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

    useEffect(()=>{
        dispatch(getByCategory(category)) 
      },[dispatch,category])


      return (
        <div className={style.container}>
          <NavStore />
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