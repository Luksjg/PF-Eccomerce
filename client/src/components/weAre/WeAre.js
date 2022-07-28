import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import style from "./WeAre.module.css";
import NavBarClient from "../navbarClient/NavBarClient";
import gc from "./hasbulla_gianCarlos.jpg";
import lucas from "./hasbulla_lucas.jpg";
import damian from "./hasbulla_damian.jpg";
import tadeo from "./hasbulla_tadeo.jpg";
export default function WeAre() {
  const [accessToken, setAccessToken] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  //seteo de estados
  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, []);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }, []);

  return (
    <div>
      <div className={style.container}>
        <div className={style.cards}>
          <a href="https://github.com/Manu10mza">
            <div className={style.nombre}>
              <h3>Back-end Developer</h3>
              <h2>Gerardo romero</h2>
            </div>
            <div className={style.foto}>
              <img
                src="https://pbs.twimg.com/media/FVAV0RhWYAAcGW0.jpg"
                alt="github"
                width="250"
                height="250"
              />
            </div>
            <div className={style.imagen}>
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
                width="100"
                height="100"
              />
            </div>
          </a>
        </div>
        <div className={style.cards}>
          <a href="https://github.com/Tiin24">
            <div className={style.nombre}>
              <h3>Back-end Developer</h3>
              <h2>Isaias Agustin Romero</h2>
            </div>
            <div className={style.foto}>
              <img
                src="https://pbs.twimg.com/media/E4uCRBrX0AAkDhi?format=jpg&name=large"
                alt="github"
                width="250"
                height="250"
              />
            </div>
            <div className={style.imagen}>
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
                width="100"
                height="100"
              />
            </div>
          </a>
        </div>
        <div className={style.cards}>
          <a href="https://github.com/tadeoigarate">
            <div className={style.nombre}>
              <h3>Back-end Developer</h3>
              <h2>Tadeo Garate</h2>
            </div>
            <div className={style.foto}>
              <img src={tadeo} alt="github" width="250" height="250" />
            </div>
            <div className={style.imagen}>
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
                width="100"
                height="100"
              />
            </div>
          </a>
        </div>
        <div className={style.cards}>
          <a href="https://github.com/Luksjg">
            <div className={style.nombre}>
              <h3>Front-end Developer</h3>
              <h2>Lucas Joel Gomez</h2>
            </div>
            <div className={style.foto}>
              <img src={lucas} alt="github" width="250" height="250" />
            </div>
            <div className={style.imagen}>
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
                width="100"
                height="100"
              />
            </div>
          </a>
        </div>
        <div className={style.cards}>
          <a href="https://us.123rf.com/450wm/iuphotos/iuphotos2010/iuphotos201004544/157632900-pared-de-ladrillo-blanco-con-traidor-de-inscripci%C3%B3n-escrito-a-mano-con-pintura-negra.jpg?ver=6">
            <div className={style.nombre}>
              <h3>In memoriam</h3>
              <h2> Giancarlos sanchez</h2>
            </div>
            <div className={style.fotoGian}>
              <img src={gc} alt="github" width="250" height="250" />
            </div>
            <div className={style.imagen}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/42/42811.png"
                alt="github"
                width="100"
                height="100"
              />
            </div>
          </a>
        </div>

        <div className={style.cards}>
          <a href="https://github.com/damebeus">
            <div className={style.nombre}>
              <h3>Front-end Developer</h3>
              <h2>Damian Olivieri</h2>
            </div>
            <div className={style.foto}>
              <img src={damian} alt="github" width="250" height="250" />
            </div>
            <div className={style.imagen}>
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
                width="100"
                height="100"
              />
            </div>
          </a>
        </div>
      </div>
      <div>
        {currentUser && currentUser.isAdmin == "si" ? (
          <NavBar />
        ) : (
          <NavBarClient />
        )}
      </div>
      <Footer />
    </div>
  );
}
