import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getAllUsers } from "../../actions";
import { Link } from "react-router-dom";
import styles from "./User.module.css"
import Page404 from "../page404/Page404";

export default function Users() {
  const [name, setName] = useState("");
  const [currentUser,setCurrentUser] = useState("")
  const users = useSelector((state) => state.users);
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getUsers(name));
    setName("");
  };

  useEffect(() => {
    dispatch(getAllUsers());
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }, [dispatch,name]);
  //console.log("users", allUsers);
  return (
    <div>
      {currentUser && currentUser.isAdmin === "no" ?
      <Page404></Page404>
      :
      <div>
      <NavBar />
      <br />
      <br />
      <div className={styles.buscadorC}>
        <form onSubmit={(e) => handleClick(e)}>
          <input
            type="text"
            value={name}
            placeholder="Buscar usuario..."
            onChange={(e) => handleInputChange(e)}
            className={styles.buscador}
          />
          <button type="submit" className={styles.input}> Buscar </button>
        </form>
      </div>

      {users ? users.map((u, i) => {
          //console.log(i);
          return (
            <div  className={styles.container}>
              <br/>
              <div key={i}>
                <Link to={`/usuario/${u.id}`}>
                  <img src={u.profile_img} width="25px" height="25px" alt="alt"></img>
                  <label>{u.username}</label>
                  <p>Email: {u.email}</p>
                  {u.is_admin === "si" ? <p>Es admin</p> : <p>No es admin</p>}
                  {u.disabled === "si" ? <p>Usuario baneado</p> : <p>Usuario vigente</p>}
                </Link>
              </div>
              <br />
            </div>
          );
        })
        :
        allUsers.map((u, i) => {
          //console.log(i);
          return (
            <div  className={styles.container}>
              <br/>
              <div key={i}>
                <Link to={`/usuario/${u.id}`}>
                  <img src={u.profile_img} width="25px" height="25px" alt="alt"></img>
                  <label>{u.username}</label>
                  <p>Email: {u.email}</p>
                  {u.is_admin === "si" ? <p>Es admin</p> : <p>No es admin</p>}
                  {u.disabled === "si" ? <p>Usuario baneado</p> : <p>Usuario vigente</p>}
                </Link>
              </div>
              <br />
            </div>
          );
        })
        }
      <Footer />
      </div>
      }
     
    </div>
  );
}
