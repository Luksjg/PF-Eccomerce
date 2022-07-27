
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
// import { getToCart } from "../../actions"
import Footer from "../footer/Footer"
import NavStore from "../NavStore/NavStore"


export default function Cart(){

    const [auxState,setAuxState]= useState("")
    const [currentUser,setCurrentUser] = useState("")
    const [totalPrice,setTotalPrice] = useState(1)
    const [carrito,setCarrito] = useState()
    // const [loading,setLoading] = useState(false) 
    // const cart  = useSelector(state=>state.cart)
    // const dispatch = useDispatch()

    function changeAmount(product,boolean){
      let aux= product.count
      // if(currentUser){
        if(boolean){
          product.count += 1
          handlePrice()
        }else{
          product.count -= 1
          handlePrice()
        // }
      }
    }

    function removeProduct(product){
      // console.log(product)
        let array = carrito.filter(p=>p.id !== product.id)
        localStorage.setItem("carrito", JSON.stringify(array))
        setCarrito(array)
    }

    function cartSubmit(){
      console.log(carrito)
      let array = carrito.map(p=>{
        return {
          productId : p.id,
          amount : p.price * p.count,
          quantity: p.count
      }
    })
    console.log(array)
    }


    useEffect(()=> {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"))
      if(currentUser){
        setCurrentUser(currentUser)
      //   dispatch(getToCart(currentUser.userId))
      //   setCarrito(cart)
      }
        setCarrito(JSON.parse(localStorage.getItem("carrito")))
      // }
      // console.log(carrito)
      // setLoading(true)
      handlePrice()  
    },[auxState])

    
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
              {currentUser.userId ?
              <p>Bienvenido {currentUser.username}</p>
              :
              <p>Por favor ingrese a su cuenta para realizar la compra</p>
              }
            </div>
            <div>
              {handlePrice}
            {carrito?.length > 0 ? carrito.map((product,i)=>{
            return(
              <div key={i}>
              <img src={product.image} alt="product imagen" width="150px" height="150px"/>
              <label>{product.name}</label>
              <label> ${product.price}</label>
              <button onClick={()=>changeAmount(product,true)} disabled={product.count === product.stock? true : false}>+</button>
              <label>{product.count}</label>
              <button onClick={()=>changeAmount(product,false)} disabled={product.count === 1? true : false}>-</button>
              <label>Remover</label>
              <button onClick={()=>removeProduct(product)}>x</button>
            </div>
            )
            }):<div>Loadig</div>}
            </div>
            <div>
              total price: {totalPrice}
            </div>
            <div>
            <div>
            <button onClick={()=> cartSubmit()} disabled={!currentUser.userId ? true: false}>
                Siguiente
              </button>
            </div>
            </div>
            <div>
              <Link to="/historial">Historial</Link>
            </div>
            <div>---------------------------------------------------</div>
            <Footer/>
        </div>
    )
    
}