import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import S from "./NavBarClient.module.css";


export default function NavBar() {
  function logOut() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    alert("See ya king! ;)");
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
    }
  }, []);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }, []);

  return (
    <div className={S.container}>
      <div className={S.botones}>
        <Link to='/'>
          <label>Home</label>
        </Link>
        <Link to='/tienda'>
          <label>Tienda</label>
        </Link>
        <Link to='/nosotros'>
          <label>Nosotros</label>
        </Link>
        <Link to='/tienda'>
          {/* <label>
            <BsSearch />
          </label> */}
        </Link>
        <div>
          {accessToken ? (
            <label onClick={logOut}>Logout</label>
          ) : (
            <Link to='/login'>
              <label>Login</label>
            </Link>
          )}
        </div>
      </div>
      {/* Only visible in admin user */}
    </div>
  );
}
