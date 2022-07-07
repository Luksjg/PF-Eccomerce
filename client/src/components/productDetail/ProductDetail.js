import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Categories from "../categories/Categories";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

export default function ProductDetail(){
    const {producto} = useParams();
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        // dispatch(getProduct(producto));
        setTimeout(()=>{setLoading(false)},1500)
      }, [dispatch, producto]);

    const product = useSelector(state => state.product)

    if(loading){
        return(
            <div>cargando</div>
        )
    }else{
    return(
        <div>
            {
                product.name ? 
                <div>Producto no encontrado</div> //Si no encunetra el producta, se renderiza un error
                :
                <div>

                <NavBar/>

                <div>-------------------------------------------------------------------------</div>

                <img src={product.images[0]} alt={product.name}/>
                {/* Si no existen mas imagenes, ni las muestra */}
                <img src={product.images[1] ? product.images[1] : null} alt={product.name}/>
                <img src={product.images[2] ? product.images[2] : null} alt={product.name}/>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description} </p>
                {/* Si no hay stock, se muestra este texto */}
                <p>{product.stock > 0 ? product.stock : <label>Sin stock</label>}</p>
                <p>Categoria: <Link to={product.category}>{product.category}</Link></p>     

                <div>-------------------------------------------------------------------------</div>

                <Categories/>

                <div>-------------------------------------------------------------------------</div>

                <Footer/>
                
                </div>  
            } 
        </div>
        ) 
    }
}