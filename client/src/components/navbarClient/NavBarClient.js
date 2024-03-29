import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import S from "./NavBarClient.module.css";
import Swal from "sweetalert2";

export default function NavBar() {
  function logOut() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    console.log(localStorage.getItem("accessToken"));
    Swal.fire("See ya king!");
    window.location.reload();
  }
  //estados locales
  const [accessToken, setAccessToken] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  //seteo de estados
  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    if (accessToken) {
      setAccessToken(accessToken);
      console.log(accessToken);
    }
  }, []);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setCurrentUser(currentUser);
      console.log(currentUser,'soy el current');
    }
  }, []);

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
        <Link to="/tienda">
          {/* <label>
            <BsSearch />
          </label> */}
        </Link>
        {currentUser ? (
          <Link to={`/profile/${currentUser.userId}`}>
            <label>Perfil</label>
          </Link>
        ) : (
          ""
        )}
        <div>
          {accessToken ? (
            <label onClick={logOut}>Logout</label>
          ) : (
            <Link to="/login">
              <label>Login</label>
            </Link>
          )}
        </div>
      </div>
      {/* Only visible in admin user */}
    </div>
  );
}
