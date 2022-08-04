/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { newSub } from "../../actions";
import style from "./Subscribe.module.css";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Subscribe() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: false });
  }, []);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    mail: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  function validateEmail(e) {
    let errors = {};
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        e.mail.toLowerCase()
      )
    ) {
      errors.mail = "Ingrese un email valido";
    }
    return errors;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validateEmail({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  async function handleSubmit(e) {
    if (!input.name || !input.mail || !input.message) {
      e.preventDefault();
      return Swal.fire(
        "Error",
        "Complete todos los campos para subscribirte",
        "error"
      );
    } else if (errors.mail) {
      e.preventDefault();
      return alert("email invalido");
    } else {
      e.preventDefault();
      dispatch(newSub(input));
      Swal.fire("Muchas gracias!", "Suscripcion exitosa", "success");
      console.log(errors);
      console.log(input);
      setInput({
        name: "",
        mail: "",
        message: "",
      });
    }
  }

  return (
    <div className={style.contenedor}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className={style.pather}
      >
        <path
          fill='#fff'
          fill-opacity='100'
          d='M0,288L26.7,282.7C53.3,277,107,267,160,234.7C213.3,203,267,149,320,122.7C373.3,96,427,96,480,112C533.3,128,587,160,640,154.7C693.3,149,747,107,800,90.7C853.3,75,907,85,960,106.7C1013.3,128,1067,160,1120,186.7C1173.3,213,1227,235,1280,245.3C1333.3,256,1387,256,1413,256L1440,256L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z'
        ></path>
      </svg>

      {/*  <a href={"https://www.instagram.com/"}><img src={"https://149440826.v2.pressablecdn.com/wp-content/uploads/2020/03/instagram-png-instagram-png-logo-1455.png"} alt="instagram Link" width="100" height="100"></img></a> */}
      <a href={"https://wa.me/543541297187"}>
        <img
          src={"http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"}
          alt='whatsapp Link'
          width='70'
          height='70'
          className={style.whatsapp}
        ></img>
      </a>
      <div className={style.form}>
        <div className={style.formTitle} data-aos='fade-up'>
          <h1>¡No te pierdas ningun articulo! </h1>
        </div>
        <div className={style.formSubtitle} data-aos='fade-up'>
          <h3>
            {" "}
            Suscríbete a nuestro newsletter y no te perderás ningún tema de
            interés del mundo del cultivo.{" "}
          </h3>
        </div>
        <div className={style.formInput}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={style.formInputGroup} data-aos='fade-right'>
              {/*         <p>Nombre</p> */}
              <input
                type='text'
                value={input.name}
                name='name'
                placeholder='Nombre'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={style.formInputGroup} data-aos='fade-left'>
              {/*     <p>Email</p> */}
              <input
                type='text'
                value={input.mail}
                placeholder='Email'
                name='mail'
                onChange={(e) => handleChange(e)}
              />
              {errors.mail ? <label>{errors.mail}</label> : null}
            </div>
            <div className={style.formInputGroup} data-aos='fade-right'>
              {/*   <p>Mensaje</p> */}
              <input
                placeholder='Mensaje'
                type='text'
                value={input.message}
                size='100'
                name='message'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={style.botonCont}>
              <button className={style.boton} type='submit'>
                {" "}
                Subscribirte{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
