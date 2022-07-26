/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getToCart, SumToCart } from "../../actions"
import Footer from "../footer/Footer"
import NavStore from "../NavStore/NavStore"

export default function Cart(){

    // const dispatch = useDispatch()
    const [currentUser,setCurrentUser] = useState("")
    const [totalPrice,setTotalPrice] = useState(1)
    const [carrito,setCarrito] = useState("")
    const [stateAux,setStateAux]= useState("")
    const [cart,setCart] = useSelector(state=>state.cart)
    const dispatch = useDispatch()

    function changeAmount(product,user,boolean){
      let aux= totalPrice
      if(user){
        if(boolean){
          product.count += 1
          setTotalPrice(aux+=1)
        }else{
          product.count -= 1
          setTotalPrice(aux-=1)
        }
      }
    }

    function removeProduct(product){
      console.log("x")
    }
    
    
    useEffect(function () {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"))
      if(currentUser){
      setCurrentUser(currentUser)
      dispatch(getToCart(currentUser.userId))
      setCarrito(cart)
      console.log(cart)
      }else{
        setCarrito(JSON.parse(localStorage.getItem("carrito")))
      }
      handlePrice()  
    },[])

    
    function handlePrice(){
        let aux = 0 
        setStateAux(aux)
        // carrito && carrito.map(p=>(aux = Number(aux) + (Number(p.price) * Number(p.count)) ))
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
            {/* {carrito && carrito.map((product,i)=>{
              return(
                <div key={i}>
                  <img src={product.image} alt="product imagen" width="150px" height="150px"/>
                  {console.log(product)}
                  <label>{product.name}</label>
                  <label> ${product.price}</label>
                  <button onClick={()=>changeAmount(product,currentUser,true)}>+</button>
                  <label>{product.count}</label>
                  <button onClick={()=>changeAmount(product,currentUser,false)}>-</button>
                  <label>Remover</label>
                  <button onClick={()=>removeProduct()}>x</button>
                </div>
              )
            })} */}
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