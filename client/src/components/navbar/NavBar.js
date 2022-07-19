import { Link } from "react-router-dom";
import S from "./NavBar.module.css";
import { BsSearch } from "react-icons/bs";

export default function NavBar() {
  function logOut(){
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div className={S.container}>
      <div className={S.botones}>
        <Link to="/">
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
          {
            localStorage.getItem("token") ? 
            <label onClick={logOut}>Logout</label> :
            <Link to="/login">
              <label>Login</label>
            </Link>
          }
        </div>
      </div>
      {/* Only visible in admin user */}
    </div>
  );
}
