import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Footer from "../footer/Footer"
import NavStore from "../NavStore/NavStore"

export default function Cart(){

    const dispatch = useDispatch()
    const [currentUser,setCurrentUser] = useState("")

    useEffect(()=>{
        const carrito = JSON.parse(localStorage.getItem("carrito"));
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        let id = currentUser.userId
        // dispatch(getCartOfUser(id))    
    },[])
    return(
        <div>
            <NavStore/>       
            <div>---------------------------------------------------</div>

            <div>---------------------------------------------------</div>
            <Footer/>
        </div>
    )
    
}