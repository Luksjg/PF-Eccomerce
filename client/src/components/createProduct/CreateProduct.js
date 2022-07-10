import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { postProduct } from "../../actions"
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
        outstanding:"no"
    })

    const history =useHistory()

    const dispatch =useDispatch()

    function handleChange(e){
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    // function handleImages(e){
    //     setInput({
    //         ...input, 
    //         // [e.target.name]: [...input.images, e.target.value]
    //         [e.target.name]: e.target.value
    //     })
    // }
    // no sirve subir imagenes

    async function handleSubmit(e){
        if(!input.name || !input.price ){
            e.preventDefault()
            return alert('Complete todos los campos para poder continuar')
        }else{
            e.preventDefault()
            dispatch(postProduct(input));
            alert('Producto creado exitosamente');
            console.log(input)
            history.push("/")
            setInput({
                name:"",
                image:[],
                price:0,
                category:"",
                stock:0,
                description:"",
                outstanding:""
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

                    {/* <div>
                        <p>Imagenes del producto</p>
                        <input type="file" name="images" onChange={e=>handleImages(e)} accept="image/png, image/gif, image/jpeg" />
                        
                    </div>

                    Buscar como postear imagenes
                    
                    */}
                      <div>
                        <p>imagen por ahora</p>
                        <input type="text" value={input.image} name='image' onChange={e=>handleChange(e)}/>
                    </div>

                    <div>
                        <p>Precio</p>
                        <input type="number" value={input.price} name="price" onChange={e=>handleChange(e)} min="1" max="10000"/>
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
                        <label><input type="radio" value={input.outstanding} key="si" name="outsanding"/>si</label>
                        <label><input type="radio" value={input.outstanding} key="no" name="outsanding"/>no</label>
                    </div>
                    <button type="submit">Crear actividad</button>
                </form>
            </div>
            <div>-------------------------------------------------------------------------</div>
            <Footer/>
        </div>
    )
}