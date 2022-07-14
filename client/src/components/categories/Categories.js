import React from "react";
import { Link } from "react-router-dom";
import style from "./Categories.module.css";
export default function Categories() {
  return (
    <div className={style.container}>
      <Link to={"/categoria/prueba"}>prueba</Link>
      <br />
      <Link to={"/categoria/abonos"}>Abonos</Link>
      <br />
      <Link to={"/categoria/cosecha"}>Cosecha</Link>
      <br />
      <Link to={"/categoria/cultivo"}>Cultivo</Link>
      <br />
      <Link to={"/categoria/destacados"}>Destacados</Link>
      <br />
      <p>Fertilizantes</p>
      <br />
      <Link to={"/categoria/control-plagas-hongos"}>
        Control de plagas y hongos
      </Link>
      <br />
      <Link to={"/categoria/topcrop"}>top crop</Link>
      <br />
      <Link to={"/categoria/herramientas-accesorios"}>
        Herramientas y accesorios
      </Link>
      <br />
      <Link to={"/categoria/iluminacion"}>Iluminacion</Link>
      <br />
      <p>Parafernalia y accesorios</p>
      <br />
      <Link to={"/categoria/armadores"}>Armadores</Link>
      <br />
      <Link to={"/categoria/bandejas"}>Bandejas</Link>
      <br />
      <Link to={"/categoria/papelillos"}>Papelillos</Link>
      <br />
      <Link to={"/categoria/picadores"}>Picadores</Link>
      <br />
      <Link to={"/categoria/pipas"}>Pipas</Link>
      <br />
      <Link to={"/categoria/varios"}>Varios</Link>
      <br />
      <Link to={"/categoria/pulverizadores"}>pulverizadores</Link>
      <br />
      <Link to={"/categoria/sustratos"}>Sustratos</Link>
      <br />
    </div>
  );
}
