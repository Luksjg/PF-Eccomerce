import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postProduct } from "../../actions";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import styles from "./CreateProduct.module.css";
import foto from "./agregarfoto.png";

export default function CreateProduct() {
  // const [imagen,setimagen]=useState("")

  const [input, setInput] = useState({
    name: "",
    image: "",
    price: 0,
    category: "",
    stock: 0,
    description: "",
    outsanding: "",
  });

  const history = useHistory();

  const dispatch = useDispatch();

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

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
    if (!input.name || !input.price) {
      e.preventDefault();
      return alert("Complete todos los campos para poder continuar");
    } else {
      e.preventDefault();
      dispatch(postProduct(input));
      console.log(input);
      alert("Producto creado exitosamente");
      console.log(input);
      history.push("/tienda");
      setInput({
        name: "",
        image: "",
        price: 0,
        category: "",
        stock: 0,
        description: "",
        outstanding: "",
      });
    }
  }

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <div className={styles.container}>
        <div className={styles.titulin}>
          <h1>Crear nuevo producto</h1>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.nombre}>
            {/*   <p>Nombre del articulo</p> */}
            <input
              type='text'
              value={input.name}
              name='name'
              placeholder='Nombre del articulo'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.description}>
            {/*       <p>Descripción del articulo</p> */}
            <textarea
              type='text'
              value={input.description}
              name='description'
              placeholder='Descripción del articulo'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            {/*    <p>Imagenes del producto</p> */}
            <div className={styles.cuadroImg}>
              {input.image ? (
                <img src={input.image} alt='not' width='250' height='250' />
              ) : (
                <div className={styles.img}>
                  <img src={foto} alt='not' width='250' height='250' />
                </div>
              )}
            </div>
            <div className={styles.botonimg}>
              <input
                type='file'
                id='file'
                name='image'
                onChange={uploadImage}
              />
            </div>
            <br />
          </div>

          <div className={styles.precio}>
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
          <div className={styles.category}>
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
          <div className={styles.stock}>
            <p>Stock:</p>
            <input
              type='number'
              value={input.stock}
              name='stock'
              onChange={(e) => handleChange(e)}
              min='1'
              max='10000'
            />
          </div>
          <div className={styles.destacar}>
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
          <div className={styles.crear}>
            <button type='submit'>Crear producto</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
