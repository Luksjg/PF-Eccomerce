import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import S from "./NavStore.module.css";
import { BsSearch } from "react-icons/bs";
import logo from "./logoShop.png";
import { useDispatch } from "react-redux";
import { getByName } from "../../actions";
import Swal from "sweetalert2";
// import LoginBtn from "../navbar/loginBTN/LoginBtn";

const NavStore = ({ setCurrentPage }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getByName(name));
    setCurrentPage(1);
    setName("");
  };

  function logOut() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    Swal.fire("Bye bye boss!");
    window.location.reload();
  }
  //estados locales

  const [accessToken, setAccessToken] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  //seteo de estados

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (accessToken) {
      setAccessToken(accessToken);
    }

    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }, []);

  return (
    <div>
      <div className={S.navSup}>
        <div className={S.logos}>
          <Link to={"/"}>
            <img src={logo} alt="logoSolo" />
          </Link>
          <div className={S.search}>
            <form onSubmit={(e) => handleClick(e)}>
              <input
                type="text"
                value={name}
                placeholder="Buscar productos..."
                onChange={(e) => handleInputChange(e)}
              />
              <button type="submit">
                <BsSearch />
              </button>
            </form>
          </div>
          <div className={S.botones}>
            {currentUser && currentUser.isAdmin == "si" ? (
              <Link to="/crearproducto">
                <label>Crear producto </label>
              </Link>
            ) : null}
            <Link to="/">
              <label>Home</label>
            </Link>
          </div>
        </div>
      </div>
      {/*      <div className={S.container}>
        <div className={S.Selectores}>
          <div className={S.usuario}>
            {accessToken ? (
              <label onClick={logOut}>Logout</label>
            ) : (
              <Link to="/login">
                <label>Login</label>
              </Link>
            )}
          </div>
          <div className={S.carrito}>
            <Link to="/carrito">
              <h3>
                <FiShoppingCart />
              </h3>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default NavStore;
