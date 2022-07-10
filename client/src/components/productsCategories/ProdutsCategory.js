import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MapProducts from "../mapProducts/MapProducts";
import { getByCategory } from "../../actions";
import Categories from "../categories/Categories";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

export default function ProductsCategory(){

    const {category} = useParams()

    const dispatch = useDispatch()

    const productsToShow = useSelector(state=> state.products)
    console.log(productsToShow)
    console.log(category)
    useEffect(()=>{
        dispatch(getByCategory(category)) 
      },[dispatch,category])


    return(
        <div>
        <div>
            <NavBar/>
            <div>-------------------------------------------------------------------------</div>
            <MapProducts productsToShow={productsToShow}/>
            <div>-------------------------------------------------------------------------</div>
            <Categories/>
            <div>-------------------------------------------------------------------------</div>
            <Footer/>
        </div>
        </div>
    )
}