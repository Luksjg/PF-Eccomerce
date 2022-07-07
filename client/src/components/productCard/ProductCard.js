import React from "react"
import { Link } from "react-router-dom"

export default function ProductCard({id,img,name,price,stock}){

    return(
        <div>
            <Link to={`/producto/${id}`}>
            <img src={img} alt="imagen no encontrada" width='250px' height='125px'/>
            <h3>{name}</h3>
            <h5>{price}</h5>
            </Link>
            {stock > 0 ? <button>Añadir al carrito</button> : <Link to={`/producto/${id}`}/>}

        </div>
    )
}