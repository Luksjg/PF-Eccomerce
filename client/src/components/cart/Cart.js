/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getToCart, SumToCart } from "../../actions"
import Footer from "../footer/Footer"
import NavStore from "../NavStore/NavStore"

export default function Cart(){

    const [auxState,setAuxState]= useState("")
    const [currentUser,setCurrentUser] = useState("")
    const [totalPrice,setTotalPrice] = useState(1)
    const [carrito,setCarrito] = useState("")
    const [cart,setCart] = useSelector(state=>state.cart)
    const dispatch = useDispatch()

    function changeAmount(product,boolean){
      let aux= product.count
      // if(currentUser){
        if(boolean){
          product.count += 1
          setTotalPrice(aux)
        }else{
          product.count -= 1
          setTotalPrice(aux)
        // }
      }
    }

    function removeProduct(product){
      if(currentUser){
        //aca lo deberia quitar del back
      }else{
        //aca deberia quitarlo del localStore
      }
    }
    
    
    useEffect(function () {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"))
      // if(currentUser){
      // setCurrentUser(currentUser)
      // dispatch(getToCart(currentUser.userId))
      // setCarrito(cart)
      // console.log(cart)
      // }else{
        setCarrito(JSON.parse(localStorage.getItem("carrito")))
      // }
      handlePrice()  
    },[])

    
    function handlePrice(){
        let aux = 0 
        setAuxState(aux)
        carrito && carrito.map(p=>(aux += p.price * p.count ))
        setTotalPrice(aux)
      }

    return(
        <div>
            <NavStore/>       
            <div>---------------------------------------------------</div>
            <div>
              <p>Bienvenido {currentUser.username}</p>
            </div>
            <div>
            {carrito && carrito.map((product,i)=>{
              return(
                <div key={i}>
                  <img src={product.image} alt="product imagen" width="150px" height="150px"/>
                  <label>{product.name}</label>
                  <label> ${product.price}</label>
                  <button onClick={()=>changeAmount(product,true)} disabled={product.count === product.stock? true : false}>+</button>
                  <label>{product.count}</label>
                  <button onClick={()=>changeAmount(product,false)} disabled={product.count === 1? true : false}>-</button>
                  <label>Remover</label>
                  <button onClick={()=>removeProduct()}>x</button>
                </div>
              )
            })}
            </div>
            <div>
              total price: {totalPrice}
            </div>
            <div>
              <Link to="/historial">Historial</Link>
            </div>
            <div>---------------------------------------------------</div>
            <Footer/>
        </div>
    )
    
}