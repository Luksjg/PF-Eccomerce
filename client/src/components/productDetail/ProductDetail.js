import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../actions";
import styles from "./../productDetail/ProductDetail.module.css"
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

export default function ProductDetail(){
    const {id} = useParams();
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(getProduct(id));
      }, [dispatch, id]);

    const product = useSelector(state => state.product)


    // if(loading){
    //     return(
    //         <div>cargando</div>
    //     )
    // }else{
    return(
        <div> 
                <div>
                <br/><br/>
                <NavBar/>

                <div className={styles.container}>
                <img src={product.images} alt={"Imagenotfound1"}/>
                {/* Si no existen mas imagenes, ni las muestra */}
                {/* <img src={product.images} alt={"Imagenotfound2"}/>
                <img src={product.images} alt={"Imagenotfound3"}/> */}
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description} </p>
                {/* Si no hay stock, se muestra este texto */}
                <p>{product.stock > 0 ? product.stock : <label>Sin stock</label>}</p>
                <p>Categoria: <Link to={`/categoria/${product.category}`}>{product.category}</Link></p>     

                </div>


                {/* <Categories/> */}

                <Footer/>
                
                </div>  
        </div>
        ) 
    }
// }