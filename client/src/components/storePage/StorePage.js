import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Categories from "../categories/Categories"
import Footer from "../footer/Footer"
import MapProducts from "../mapProducts/MapProducts"
import NavBar from "../navbar/NavBar"
import { getAllProducts, order } from "../../actions"

export default function StorePage(){
    const dispatch = useDispatch()
    
    const productsToShow = useSelector(state=> state.products)

    
    function handleSort(e){
        dispatch(order(e.target.value));
    }

    useEffect(()=>{
       dispatch(getAllProducts()) 
    },[dispatch])

    return(
        <div>
            <NavBar/>
            <div>-------------------------------------------------------------------------</div>

            <div>
                <label></label>
                <select onChange={e => handleSort(e)}>
                    <option value="asc">Orden alfabetico</option>
                    <option value="desc">Orden alfabetico descendente</option>
                    <option value="maxPrice">Menor precio</option>
                    <option value="minPrice">Mayor precio</option>
                    <option value="maxValoration">Mayor valoracion</option>
                    <option value="minValoration">Menor valoracion</option>
                </select>
            </div>

            <MapProducts productsToShow={productsToShow}/>
            <div>-------------------------------------------------------------------------</div>
            <Categories/>
            <div>-------------------------------------------------------------------------</div>
            <Footer/>
        </div>
    )
}