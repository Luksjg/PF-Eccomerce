import React, { useState } from "react";
import { Link } from "react-router-dom";
import S from "./NavStore.module.css";
import { FiShoppingCart } from "react-icons/fi";
// import { BsSearch } from "react-icons/bs";
import logo from "./logoShop.png";
import { useDispatch } from "react-redux";
import { getByName } from "../../actions";

const NavStore = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch()
  
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getByName(name));
    setName("")
  };

  return (
    <div>
      <div className={S.navSup}>
        <div className={S.logos}>
          <img src={logo} alt='logoSolo' />
          <div className={S.search}>
            <form onSubmit={(e) => handleClick(e)}>
              <input type='text' value={name} placeholder='Buscar productos, marcas y mas...' onChange={(e) => handleInputChange(e)}/>
              <button type="submit">buscar</button>
            </form>
          </div>
          <div className={S.botones}>
            <Link to='/crearproducto'>
              <label>Crear producto </label>
            </Link>
            <Link to='/'>
              <label>Home</label>
            </Link>
          </div>
        </div>
      </div>
      <div className={S.container}>
        <div className={S.categorias}>
          <div className={S.Selectores}>
            <select>
              <option value='null'>Orden Alfabetico</option>
              <option value='az'>Ascendente</option>
              <option value='za'>Descendente</option>
            </select>
            <select className={S.buttonSelectP}>
              <option value='null'>Precio</option>
              <option value='maxPrice'>Menor precio</option>
              <option value='minPrice'>Mayor precio</option>
            </select>
            <select>
              <option value='maxValoration'>Mayor valoracion</option>
              <option value='minValoration'>Menor valoracion</option>
            </select>
            <div className={S.usuario}>
              <Link to='/loginjwt'>
                <label>Login</label>
              </Link>
            </div>
            <div className={S.carrito}>
              <h3>
                <FiShoppingCart />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavStore;