import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import {  postShipping, cofirmarCompra } from "../../actions"
import Footer from "../footer/Footer"
import NavBar from "../navbar/NavBar"

export default function FormMP() {

    

    const data = useSelector(state=>state.orderToMP)

    const puta = useSelector(state=>state.guardar)

    const [currentUser,setCurrentUser] = useState("")

    useEffect(()=> {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        if(currentUser){
          setCurrentUser(currentUser)
        }
    }, [])

   

    const [input, setInput] = useState({
        calle: "",
        numero: "",
        ciudad: "",
        provincia: "",
        codigoPostal: "",
        pisoDepartamento: ""
    });
;
    const dispatch = useDispatch()

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }   

    async function handleSubmit(e) {
        if (!input.calle || !input.numero || !input.ciudad || !input.provincia || !input.codigoPostal ) {
            e.preventDefault();
            return alert("Complete todos los campos para poder continuar")
        } else{
            e.preventDefault();
            dispatch(postShipping(input));
            dispatch(cofirmarCompra(puta, currentUser.userId))
            alert("Envio completado correctamente");
            setInput({
              calle: "",
              numero: "",
              ciudad: "",
              provincia: "",
              codigoPostal: ""
            })
            dispatch(cofirmarCompra(puta, currentUser.userId))
            let array = []
            localStorage.setItem("carrito", JSON.stringify(array));
            window.location.href = data
        }
    }
    return(
        <div>
            <div>
            <br />
            <br />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <div>
                        <h1>Direccion Del Envio</h1>
                    </div>
                    <p>Nombre de la Calle:</p>
                    <input 
                        type="text"
                        value={input.calle}
                        name="calle"
                        placeholder="Nombre de la Calle"
                        onChange={e => handleChange(e)}
                     />
                </div>

                <div>
                <p>Numero de la Calle:</p>
                    <input 
                        type="text"
                        value={input.numero}
                        name="numero"
                        placeholder="numero de la calle"
                        onChange={e => handleChange(e)} 
                    />
                </div>

                <div>
                <p>Piso y Departament:</p>
                    <input 
                        type="text"
                        value={input.pisoDepartamento}
                        name="pisoDepartamento"
                        placeholder="Opcional"
                        onChange={e => handleChange(e)} 
                    />
                </div>

                <div>
                <p>Ciudad:</p>
                    <input 
                        type="text"
                        value={input.ciudad}
                        name="ciudad"
                        placeholder="Ciudad"
                        onChange={e => handleChange(e)}
                    />
                </div>

                <div>
                <p>Provincia:</p>
                    <input 
                        type="text"
                        value={input.provincia}
                        name="provincia"
                        placeholder="Provincia"
                        onChange={e => handleChange(e)} 
                    />
                </div>

                <div>
                <p>Codigo Postal:</p>
                    <input 
                        type="text"
                        value={input.codigoPostal}
                        name="codigoPostal"
                        placeholder="Codigo Postal"
                        onChange={e => handleChange(e)} 
                    />
                </div>

                <div>
                </div>

                <div>
                    <button type='submit'>Checkout</button>
                </div>
                
            </form>
            <br />
            <br />
        </div>
            <Footer />
        </div>
    )
}