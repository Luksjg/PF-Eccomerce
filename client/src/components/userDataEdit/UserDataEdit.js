import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, putUser } from "../../actions";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import styles from "./UserDataEdit.module.css";

export default function UserDataEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  const user = useSelector((state) => state.user);

  const [input, setInput] = useState({
    username: user.username,
    email: user.email,
    profile_img: user.profile_img,
    is_admin: user.is_admin,
    disabled: user.disabled,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(putUser(id, input));
    alert("Usuario editado");
    history.push(`/usuario/${id}`);
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  async function uploadImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dbgreenshop/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    const aux = file.secure_url;
    setInput({
      ...input,
      profile_img: aux,
    });
  }

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <div className={styles.container}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.imagen}>
            <img src={input.profile_img} alt='not' width='250' height='250' />
            <br />
          </div>
          <br />
          <div className={styles.user}>
            <p>Username </p>
            <input
              type='text'
              value={input.username}
              name='username'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <br />
          <div className={styles.email}>
            <p>Email </p>
            <input
              type='text'
              value={input.email}
              name='email'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <br />
          <div className={styles.admin}>
            <p>¿Es administrador? </p>
            <select
              value={input.is_admin}
              name='is_admin'
              onChange={(e) => handleChange(e)}
            >
              <option>no</option>
              <option>si</option>
            </select>
          </div>
          <br />
          <div className={styles.baneado}>
            <label>¿Usuario baneado? </label>
            <select
              value={input.disabled}
              name='disabled'
              onChange={(e) => handleChange(e)}
            >
              <option>no</option>
              <option>si</option>
            </select>
          </div>
          <div className={styles.botones}>
            <button type='submit'>Modificar</button>
            <button>
              <Link to={`/usuario/${id}`}>Cancelar</Link>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
