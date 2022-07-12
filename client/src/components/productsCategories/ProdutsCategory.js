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


    useEffect(()=>{
        dispatch(getByCategory(category)) 
      },[dispatch,category])


    return(
        <div>
            <NavBar/>
            <br/>
            <MapProducts productsToShow={productsToShow}/>

            <Categories/>

            <Footer/>
        </div>
    )
}