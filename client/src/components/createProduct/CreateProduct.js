import React, { useState } from "react"
// import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import Footer from "../footer/Footer"
import NavBar from "../navbar/NavBar"

export default function CreateProduct(){
    const[input,setInput]=useState({
        name:"",
        images:[],
        price:0,
        category:"",
        stock:0,
        description:"",
        outstanding:false
    })

    const history =useHistory()

    // const dispatch =useDispatch()

    function handleChange(e){
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    function handleImages(e){
        setInput({
            ...input, 
            [e.target.name]: [...input.images, e.target.value]
        })
    }
    //sirve pero tendria que ver como se guardan en la base de datos

    async function handleSubmit(e){
        if(!input.name || input.images.length < 1 || !input.price ){
            e.preventDefault()
            return alert('Complete todos los campos para poder continuar')
        }else{
            e.preventDefault()
            // dispatch(postProduct(input));
            alert('Producto creado exitosamente');
            console.log(input)
            history.push("/home")
            setInput({
                name:"",
                images:[],
                price:0,
                category:"",
                stock:0,
                description:"",
                outstanding:false
            })
        }
    }

    return(
        <div>
            <NavBar/>
            <div>-------------------------------------------------------------------------</div>
            <h2>Crear nuevo producto</h2>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <p>Nombre del articulo</p>
                        <input type="text" value={input.name} name='name' onChange={e=>handleChange(e)}/>
                    </div>
                    <div>
                        <p>Imagenes del producto</p>
                        <input type="file" name="images" onChange={e=>handleImages(e)} accept="image/png, image/gif, image/jpeg" />
                        
                    </div>
                    <div>
                        <p>Precio</p>
                        <input type="number" value={input.price} name="price" onChange={e=>handleChange(e)} min="1" max="10000"/>
                        
                    {/* input[type=number]::-webkit-inner-spin-button, 
                    input[type=number]::-webkit-outer-spin-button { 
                    -webkit-appearance: none; 
                    margin: 0; 
                    }
                    input[type=number] { -moz-appearance:textfield; } 
                    (CODIGO CSS PARA QUITAR LOS BOTONCITOS DE UN INPUT NUMBER)*/}

                    </div>
                    <div>
                        <p>Categoria:</p>
                        <select value={input.category} name="category" onChange={e=>handleChange(e)}>
                        <option></option>
                        <option>abonos</option>
                        <option>cosecha</option>
                        <option>cultivo</option>
                        <option>destacados</option>
                        <option>control-plagas-hongos</option>
                        <option>topcrop</option>
                        <option>herramientas-accesorios</option>
                        <option>iluminacion</option>
                        <option>armadores</option>
                        <option>bandejas</option>
                        <option>papelillos</option>
                        <option>picadores</option>
                        <option>pipas</option>
                        <option>varios</option>
                        <option>pulverizadores</option>
                        <option>sustratos</option>
                        </select>
                        </div>
                    <div></div>
                        <p>Stock:</p>
                        <input type="number" value={input.stock} name="stock" onChange={e=>handleChange(e)} min="1" max="10000"/>
                    <div>
                        <p>¿Destacar producto?</p>
                        <select value={input.outstanding} name="outsanding" onChange={e=>handleChange(e)}>
                        <option>No</option>
                        <option>Si</option>
                        </select>
                    </div>
                    <button type="submit">Crear actividad</button>
                </form>
            </div>
            <div>-------------------------------------------------------------------------</div>
            <Footer/>
        </div>
    )
}