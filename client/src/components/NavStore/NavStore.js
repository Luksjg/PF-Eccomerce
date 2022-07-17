import React, {  useState } from "react";
import { Link } from "react-router-dom";
import S from "./NavStore.module.css";
import { FiShoppingCart } from "react-icons/fi";
// import { BsSearch } from "react-icons/bs";
import logo from "./logoShop.png";
import { useDispatch } from "react-redux";
import { getByName, order } from "../../actions";

const NavStore = ({setCurrentPage}) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch()

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getByName(name));
    setCurrentPage(1)
    setName("")
  };

  function handleSort(e){
    dispatch(order(e.target.value))
    setCurrentPage(1)
  }

  return (
    <div>
      <div className={S.navSup}>
        <div className={S.logos}>
          <Link to={"/"}>
            <img src={logo} alt='logoSolo' />
          </Link>
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
            <label>Orden</label>
            <select onSubmit={e=>handleSort(e)}>
              <option value='az'>Ascendente</option>
              <option value='za'>Descendente</option>
              <option value='maxPrice'>Menor precio</option>
              <option value='minPrice'>Mayor precio</option>
              {/* <option value='maxValoration'>Mayor valoracion</option>
              <option value='minValoration'>Menor valoracion</option> */}
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
