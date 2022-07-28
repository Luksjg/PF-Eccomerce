import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { editProduct, getProduct } from "../../actions";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import styles from "./ProductEdit.module.css";
import foto from "../createProduct/agregarfoto.png";
import Swal from "sweetalert2";
export default function ProductEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

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
    dispatch(editProduct(input, id));
    Swal.fire(
      "Producto editado!",
      "Los clientes ya pueden disfrutar del producto",
      "success"
    );
    history.push(`/producto/${id}`);
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.product);

  const [input, setInput] = useState({
    name: product.name,
    image: product.image,
    price: product.price,
    category: product.category,
    stock: product.stock,
    description: product.description,
    outsanding: product.outsanding,
    disabled: product.disabled,
  });

  return (
    <div>
      {console.log(product)}
      <NavBar />
      <br />
      <br />
      <div className={styles.container}>
        <div className={styles.titulin}>
          <h1>Editar Producto</h1>
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
          <div className={styles.botones}>
            <div className={styles.crear}>
              <button type='submit'>Editar producto</button>
            </div>
            <div className={styles.desactivar}>
              <select
                value={input.disabled}
                onChange={(e) => handleChange(e)}
                name='disabled'
              >
                <option>Desactivar producto </option>
                <option>no</option>
                <option>si</option>
              </select>
            </div>
            <div className={styles.cancelar}>
              <span>
                <Link to={`/producto/${id}`}>Cancelar</Link>
              </span>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
