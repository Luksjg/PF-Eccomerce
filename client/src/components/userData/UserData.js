import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../actions";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import styles from "./UserData.module.css";
import Page404 from "../page404/Page404";

export default function UserData() {
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }, [dispatch, id]);

  const user = useSelector((state) => state.user);
  return (
    <div>
      {currentUser && currentUser.isAdmin === "no" ? (
        <Page404></Page404>
      ) : (
        <div>
          <NavBar />
          <br />
          <br />
          <div className={styles.container}>
            <div className={styles.imagen}>
              <img
                src={user.profile_img}
                alt='img'
                width='250'
                height='250'
              ></img>
            </div>
            <div className={styles.user}>
              <p>{user.username}</p>
            </div>
            <div className={styles.email}>
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
            </div>
            <div className={styles.editar}>
              <Link to={`/usuarioedit/${id}`}>
                <span>Editar usuario</span>
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}
