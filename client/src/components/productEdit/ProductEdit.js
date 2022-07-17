import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory, useParams } from "react-router-dom"
import { editProduct, getProduct } from "../../actions"
import Footer from "../footer/Footer"
import NavBar from "../navbar/NavBar"
import styles from "./ProductEdit.module.css";

export default function ProductEdit(){

    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const product = useSelector((state) => state.product);

    const [input, setInput] = useState({
        name: product.name,
        image: product.image,
        price: product.price,
        category: product.category,
        stock: product.stock,
        description: product.description,
        outsanding: product.outsanding,
    });

    async function uploadImage(e) {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "images");
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dbgreenshop/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const file = await res.json();
        const aux = file.secure_url;
        setInput({
          ...input,
          image: aux,
        });
    }
    
    async function handleSubmit(e) {
          e.preventDefault();
          dispatch(editProduct(input,id));
          console.log(input);
          alert("Producto editado exitosamente");
          console.log(input);
          history.push(`/producto/${id}`)     
    }

    function handleChange(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
    }

    useEffect(()=>{
        dispatch(getProduct(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    return (
        <div className={styles.container}>
          <NavBar />
          <br />
          <br />
          <div>
            <div className={styles.titulin}>
              <h1>Editar producto</h1>
            </div>
    
    
            <div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <p>Nombre del articulo</p>
                  <input
                    type='text'
                    value={input.name}
                    name='name'
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <p>Descripción del articulo</p>
                  <input
                    type='text'
                    value={input.description}
                    name='description'
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <p>Imagenes del producto</p>
                  <div>
                    {input.image ? (
                      <img src={input.image} alt='not' className={styles.image} />
                    ) : (
                      <label>imagen</label>
                    )}
                  </div>
                  <input
                    type='file'
                    id='file'
                    name='image'
                    onChange={uploadImage}
                  />
                  <br />
                </div>
    
                <div>
                  <p>Precio</p>
                  <input
                    type='number'
                    value={input.price}
                    name='price'
                    onChange={(e) => handleChange(e)}
                    min='1'
                    max='10000'
                  />
                </div>
                <div>
                  <p>Categoria:</p>
                  <select
                    value={input.category}
                    name='category'
                    onChange={(e) => handleChange(e)}
                  >
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
                <input
                  type='number'
                  value={input.stock}
                  name='stock'
                  onChange={(e) => handleChange(e)}
                  min='1'
                  max='10000'
                />
                <div>
                  <p>¿Destacar producto?</p>
                  <select
                    value={input.outsanding}
                    name='outsanding'
                    onChange={(e) => handleChange(e)}
                  >
                    <option></option>
                    <option>si</option>
                    <option>no</option>
                  </select>
                </div>
                <button type='submit'>Editar producto</button>
              </form>
              <button><Link to={`/producto/${id}`}>Cancelar</Link></button>
            </div>
          </div>
          <Footer />
        </div>
      );
}