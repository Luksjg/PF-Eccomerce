import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { postProduct } from "../../actions"
import Footer from "../footer/Footer"
import NavBar from "../navbar/NavBar"

export default function CreateProduct(){

    // const [imagen,setimagen]=useState("")

    const[input,setInput]=useState({
        name:"",
        image:"",
        price:0,
        category:"",
        stock:0,
        description:"",
        outsanding:""
    })


    const history =useHistory()

    const dispatch =useDispatch()

    function handleChange(e){
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    async function uploadImage(e){
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset","images")
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dbgreenshop/image/upload",
            {
                method:"POST",
                body:data
            }
        )
        const file = await res.json()
        const aux = file.secure_url
        setInput({
            ...input,
            image: aux
        })
    }

    


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
                image:"",
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
            <br/><br/>
            <div>-------------------------------------------------------------------------</div>
            <h2>Crear nuevo producto</h2>

            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <p>Nombre del articulo</p>
                        <input type="text" value={input.name} name='name' onChange={e=>handleChange(e)}/>
                    </div>
                    <div>
                        <p>Descripción del articulo</p>
                        <input type="text" value={input.description} name='description' onChange={e=>handleChange(e)}/>
                    </div>
                    <div>
                        <p>Imagenes del producto</p>
                        <div>
                            {input.image? <img src={input.image} alt="not"/>:<label>imagen</label>}
                        </div>
                        <input type="file" id="file"  name="image" onChange={uploadImage}/>
                        <br/>
                        
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
                        <select value={input.outsanding} name="outsanding" onChange={e=>handleChange(e)}>
                            <option></option>
                            <option>si</option>
                            <option>no</option>
                        </select>
                    </div>
                    <button type="submit">Crear producto</button>
                </form>
            </div>
            <div>-------------------------------------------------------------------------</div>
            <Footer/>
            
        </div>
    )
    
}