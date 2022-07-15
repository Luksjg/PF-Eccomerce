import React from "react";
import { Link } from "react-router-dom";
import S from "./NavStore.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import logo from "./logoShop.png";

const NavStore = () => {
  return (
    <div>
      <div className={S.navSup}>
        <div className={S.logos}>
          <img src={logo} alt='logoSolo' />
          <div className={S.search}>
            <input
              type='text'
              placeholder='Buscar productos, marcas y mas...'
            />
            <button>
              <BsSearch />
            </button>
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
              <select>
                <option value='null'>😎 Usuario</option>
                <option value='Logout'>Salir</option>
              </select>
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
