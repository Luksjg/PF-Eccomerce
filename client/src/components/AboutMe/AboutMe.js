import React from "react";
import style from "./AboutMe.module.css";
import local from "./local.jpg";

const AboutMe = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.imagen}>
        <img src={local} alt='imagen' />
      </div>
      <div className={style.texto}>
        <strong>Quiénes Somos</strong>
        <p>
          En {/* <Link to='/nosotros'> */}Henry Green Shop{/* </Link> */}, nos
          dedicamos hace mas de 15 dias a la venta de productos para cultivos
        </p>
        <p>
          Contamos con la más amplia variedad de productos, todos de la mejor
          calidad y al precio más conveniente.
        </p>
        <p>
          Nos destacamos además por ofrecerte un asesoramiento profesional, para
          que te lleves exactamente lo que estás buscando, ya que tu
          satisfacción es nuestro principal objetivo.
        </p>
        <p>¡Acercate a nuestro local y hacé crecer tus cultivos!</p>
      </div>
    </div>
  );
};

export default AboutMe;
