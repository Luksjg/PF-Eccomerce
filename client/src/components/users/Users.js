import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getAllUsers } from "../../actions";
import { Link } from "react-router-dom";

export default function Users() {
  const [name, setName] = useState("");
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
  }, [dispatch]);
  //console.log("users", allUsers);
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <div>------------------------------------</div>
      <div>
        <form onSubmit={(e) => handleClick(e)}>
          <input
            type="text"
            value={name}
            placeholder="Buscar usuario..."
            onChange={(e) => handleInputChange(e)}
          />
          <button type="submit"> Buscar </button>
        </form>
      </div>
      <div>------------------------------------</div>
      {allUsers &&
        allUsers.map((u, i) => {
          //console.log(i);
          return (
            <div>
              <br />
              <div key={i}>
                <Link to={`/usuario/${u.id}`}>
                  <p>Usuario: {u.username}</p>
                  <p>Email: {u.email}</p>
                  <p>Foto de perfil: {u.profile_img}</p>
                  {u.is_admin === "si" ? <p>Es admin</p> : <p>No es admin</p>}
                </Link>
              </div>
              <br />
            </div>
          );
        })}
      <div>------------------------------------</div>
      <Footer />
    </div>
  );
}
