import { Link } from "react-router-dom";
import S from "./NavBar.module.css";
import { BsSearch } from "react-icons/bs";

export default function NavBar() {

  
  return (
    <div className={S.container}>
      <div className={S.botones}>
        <Link to="/usuarios">
          <label>Usuarios</label>
        </Link>
        <Link to='/'>
          <label>Home</label>
        </Link>
        <Link to="/tienda">
          <label>Tienda</label>
        </Link>
        <Link to="/nosotros">
          <label>Nosotros</label>
        </Link>
        <Link to="/crearproducto">
          <label>Crear producto </label>
        </Link>
        <Link to="/tienda">
          <label>
            <BsSearch />
          </label>
        </Link>
        <div>
          <Link to="/login">
              <label>Login</label>
            </Link>
          
        </div>

      </div>
      {/* Only visible in admin user */}
    </div>
  );
}
