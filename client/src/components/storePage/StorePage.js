import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Categories from "../categories/Categories"
import Footer from "../footer/Footer"
import MapProducts from "../mapProducts/MapProducts"
import NavBar from "../navbar/NavBar"
import { getAllProducts } from "../../actions"

export default function StorePage(){
    const dispatch = useDispatch()
    
    const productsToShow = useSelector(state=> state.allProducts)

    useEffect(()=>{
       dispatch(getAllProducts()) 
    },[dispatch])


    return(
        <div>
            <NavBar/>
            <div>-------------------------------------------------------------------------</div>
            <MapProducts productsToShow={productsToShow}/>
            <div>-------------------------------------------------------------------------</div>
            <Categories/>
            <div>-------------------------------------------------------------------------</div>
            <Footer/>
        </div>
    )
}