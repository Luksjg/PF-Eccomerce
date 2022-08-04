/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getReviews, postReview } from "../../actions";
import style from "./Comments.module.css";

export default function Comments() {
  const idProduct = useParams();
  const history = useHistory();

  const [input, setInput] = useState({
    productId: idProduct.id,
    review: "",
    valoration: 0,
    // userId:""
  });

  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    if (!input.review || input.valoration === 0) {
      e.preventDefault();
      return alert("Complete todos los campos para poder continuar");
    } else {
      e.preventDefault();
      setInput({
        ...input,
        valoration: Number(input.valoration),
      });
      dispatch(postReview(input));
      setInput({
        review: "",
        valoration: 0,
      });
      history.push("/tienda");
    }
  }

  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    dispatch(getReviews(idProduct.id));

    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    console.log(currentUser);
  }, [dispatch]);

  return (
    <div className={style.cont}>
      {currentUser ? (
        <div className={style.subcont}>
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* <p>UserId POR AHORA</p>
                     No se como van a obtener el userId desde este componente, con auth0 se puede 
                    <input type="text" value={input.userId} name="userId" onChange={e=>handleChange(e)} placeholder="Usuario..."/> */}
            <h1>Deja una reseña</h1>
            <div className={style.caja}>
              <textarea
                type='text'
                value={input.review}
                name='review'
                onChange={(e) => handleChange(e)}
                placeholder='Comentario...'
              />
            </div>
            <div className={style.calif}>
              <label>Calificacion</label>
              <input
                onChange={(e) => handleChange(e)}
                type='range'
                min='1'
                max='5'
                name='valoration'
                value={input.valoration}
              />{" "}
              <span> {input.valoration + "⭐"}</span>
            </div>
            <div className={style.boton}>
              <button type='submit'>Comentar</button>
            </div>
          </form>
        </div>
      ) : (
        <div className={style.subcont}>
          <h1>Deja una reseña</h1>
          <div className={style.sesion}>
            <p>Para poder dejar una reseña debes </p>
            <Link to='/login'>ㅤiniciar sesion</Link>
          </div>
        </div>
      )}

      <div className={style.review}>
        <h2>Reseñas :</h2>
        {reviews.length > 0 ? (
          reviews.map((r, i) => (
            <div key={i}>
              <label>{r.valoration + " ⭐"}</label>
              <p>{r.review}</p>
            </div>
          ))
        ) : (
          <div className={style.ternario}>
            <p>No hay reseñas</p>
          </div>
        )}
      </div>
    </div>
  );
}
