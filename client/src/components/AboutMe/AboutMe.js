import React, { useEffect } from "react";
import style from "./AboutMe.module.css";
import local from "./local.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className={style.contenedor}>
      <div className={style.imagen} data-aos='fade-right'>
        <img src={local} alt='imagen' />
      </div>
      <div className={style.texto} data-aos='fade-left'>
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
