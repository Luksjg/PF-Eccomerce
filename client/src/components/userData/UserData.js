import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../actions";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import styles from "./UserData.module.css"

export default function UserData() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  const user = useSelector((state) => state.user);
  //console.log("user", user);
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <div className={styles.container}>
      <img src={user.profile_img} alt="img" width="250" height="250"></img>
      <p>{user.username}</p>
      <p>{user.email}</p>
      {user.is_admin === "si" ? (
        <p>Es administrador</p>
        ) : (
          <p>No es administrador</p>
          )}
        {user.disabled === "si" ? (
        <p>Usuario baneado</p>
        ) : (
          <p>Usuario vigente</p>
        )}
      <div>
        <Link to={`/usuarioedit/${id}`}>
          <span>Editar usuario</span>
        </Link>
      </div>
      </div>
        <Footer />
    </div>
  );
}
