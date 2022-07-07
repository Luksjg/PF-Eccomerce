import React from "react"
import Categories from "../categories/Categories"
import Footer from "../footer/Footer"
import MapProducts from "../mapProducts/MapProducts"
import NavBar from "../navbar/NavBar"

export default function StorePage(){



    return(
        <div>
            <NavBar/>
            <div>-------------------------------------------------------------------------</div>
            <MapProducts/>
            <div>-------------------------------------------------------------------------</div>
            <Categories/>
            <div>-------------------------------------------------------------------------</div>
            <Footer/>
        </div>
    )
}