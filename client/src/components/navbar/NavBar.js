import { Link } from "react-router-dom";
import S from "./NavBar.module.css";
import { BsSearch } from "react-icons/bs";
import LoginBtn from "./loginBTN/LoginBtn";

export default function NavBar() {
  return (
    <div className={S.container}>
      <div className={S.botones}>
        <div className={S.search}>
          <input type='text' placeholder='Buscar productos...' />
          <button>
            <BsSearch />
          </button>
        </div>
        <Link to='/'>
          <label>Home</label>
        </Link>
        <Link to='/tienda'>
          <label>Tienda</label>
        </Link>
        <Link to='/nosotros'>
          <label>Nosotros</label>
        </Link>
        <Link to='/crearproducto'>
          <label>Crear producto </label>
        </Link>

        {/*  <Link to='/loginjwt'>
        <label>Login</label>
      </Link> */}

        <LoginBtn />
      </div>
      {/* Only visible in admin user */}
    </div>
  );
}
