import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getReviews, postReview } from "../../actions";
import style from "./Comments.module.css";

export default function Comments() {
  const idProduct = useParams();
  const history = useHistory()

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
      history.push("/tienda")
    }
  }

  useEffect(() => {
    dispatch(getReviews(idProduct.id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className={style.cont}>
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
      <div>
        {reviews &&
          reviews.map((r, i) => (
            <div key={i}>
              <p>{r.review}</p>
              <label>{r.valoration}</label>
            </div>
          ))}
      </div>
    </div>
  );
}
