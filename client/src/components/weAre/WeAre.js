import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import style from "./WeAre.module.css";

export default function WeAre() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.cards}>
          <a href='https://github.com/Manu10mza'>
            <div className={style.nombre}>
              <h3>Back-end Developer</h3>
              <h2>Gerardo romero</h2>
            </div>
            <div className={style.foto}>
              <img
                src='https://images.cults3d.com/beZmg2QloYTwLDzAl7gsHHdnHig=/https://files.cults3d.com/uploaders/17719686/illustration-file/e73ab6e0-a7ae-44e3-81cd-a784acac9435/descarga-(2).jpg'
                alt='github'
              />
            </div>
            <div className={style.imagen}>
              <img
                src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                alt='github'
                width='100'
                height='100'
              />
            </div>
          </a>
        </div>
        <div className={style.cards}>
          <a href='https://github.com/Tiin24'>
            <div className={style.nombre}>
              <h3>Back-end Developer</h3>
              <h2>Isaias Agustin Romero</h2>
            </div>
            <div className={style.foto}>
              <img
                src='https://images.cults3d.com/beZmg2QloYTwLDzAl7gsHHdnHig=/https://files.cults3d.com/uploaders/17719686/illustration-file/e73ab6e0-a7ae-44e3-81cd-a784acac9435/descarga-(2).jpg'
                alt='github'
              />
            </div>
            <div className={style.imagen}>
              <img
                src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                alt='github'
                width='100'
                height='100'
              />
            </div>
          </a>
        </div>
        <div className={style.cards}>
          <a href='https://github.com/tadeoigarate'>
            <div className={style.nombre}>
              <h3>Back-end Developer</h3>
              <h2>Tadeo Garate</h2>
            </div>
            <div className={style.foto}>
              <img
                src='https://images.cults3d.com/beZmg2QloYTwLDzAl7gsHHdnHig=/https://files.cults3d.com/uploaders/17719686/illustration-file/e73ab6e0-a7ae-44e3-81cd-a784acac9435/descarga-(2).jpg'
                alt='github'
              />
            </div>
            <div className={style.imagen}>
              <img
                src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                alt='github'
                width='100'
                height='100'
              />
            </div>
          </a>
        </div>
        <div className={style.cards}>
          <a href='https://github.com/damebeus'>
            <div className={style.nombre}>
              <h3>Front-end Developer</h3>
              <h2>Damian Olivieri</h2>
            </div>
            <div className={style.foto}>
              <img
                src='https://images.cults3d.com/beZmg2QloYTwLDzAl7gsHHdnHig=/https://files.cults3d.com/uploaders/17719686/illustration-file/e73ab6e0-a7ae-44e3-81cd-a784acac9435/descarga-(2).jpg'
                alt='github'
              />
            </div>

            <div className={style.imagen}>
              <img
                src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                alt='github'
                width='100'
                height='100'
              />
            </div>
          </a>
        </div>
        <div className={style.cards}>
          <a href='https://github.com/Luksjg'>
            <div className={style.nombre}>
              <h3>In memoriam</h3>
              <h2> Giancarlos sanchez</h2>
            </div>
            <div className={style.fotoGian}>
              <img
                src='https://ih1.redbubble.net/image.1373073035.3205/pp,504x498-pad,600x600,f8f8f8.jpg'
                alt='github'
                width={250}
              />
            </div>
            <div className={style.imagen}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/42/42811.png'
                alt='github'
                width='100'
                height='100'
              />
            </div>
          </a>
        </div>
        <div className={style.cards}>
          <a href='https://github.com/Luksjg'>
            <div className={style.nombre}>
              <h3>Front-end Developer</h3>
              <h2>Lucas Joel Gomez</h2>
            </div>
            <div className={style.foto}>
              <img
                src='https://images.cults3d.com/beZmg2QloYTwLDzAl7gsHHdnHig=/https://files.cults3d.com/uploaders/17719686/illustration-file/e73ab6e0-a7ae-44e3-81cd-a784acac9435/descarga-(2).jpg'
                alt='github'
              />
            </div>
            <div className={style.imagen}>
              <img
                src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                alt='github'
                width='100'
                height='100'
              />
            </div>
          </a>
        </div>
      </div>

      <NavBar />
      <Footer />
    </div>
  );
}
