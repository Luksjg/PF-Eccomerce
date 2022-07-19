import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./LoginBtn.module.css";

function LoginBtn() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div className={style.container}>
      {isAuthenticated ? (
        <label onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </label>
      ) : (
        <label onClick={() => loginWithRedirect()}>Login</label>
      )}
    </div>
  );
}

export default LoginBtn;
