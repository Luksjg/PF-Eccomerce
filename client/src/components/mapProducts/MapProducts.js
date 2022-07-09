import React, { useState } from "react"
import { Link } from "react-router-dom"
import Paginated from "../paginated/Paginated"
import ProductCard from "./../productCard/ProductCard"

export default function MapProducts({productsToShow}){

    const [currentPage, setCurrentPage] = useState(1)

    console.log(productsToShow)

    // let products = productsToShow.data
    let productsPage = 9
    const LastProduct = currentPage * productsPage
    const FirstProduct = LastProduct - productsPage
    const currentProducts = productsToShow.slice(FirstProduct, LastProduct)

    return(
        <div>
         <ul>
            {  currentProducts.map(product => (
                <div key={product.id}>
                    <Link to={'/producto/' + product.id}>
                    <ProductCard
                    id={product.id}
                    img={product.img}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                    />
                    </Link>
                </div>
                ))}
            </ul>
            <Paginated allProducts={productsToShow.length} setCurrentPage={setCurrentPage}/>
        </div>
    )
}