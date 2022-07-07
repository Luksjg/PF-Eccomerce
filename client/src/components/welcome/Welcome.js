import React from "react"
import { Link } from "react-router-dom"

export default function Welcome(){

    return(
        <div>
            <img src="https://i.pinimg.com/736x/18/4c/51/184c515146b9a891c744ec9a266f2229.jpg" alt="welcome logo"/>
            <p> El e-commerce más completo en productos para cultivos y grow.
            ¡Hacé tu pedido con el codigo SoyHenry y obtené un 20% DE AUMENTO en tu próxima compra! </p>
            <Link to={"/tienda"}>Ver productos</Link>
        </div>
    )
}