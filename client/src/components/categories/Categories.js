import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../actions";
import style from "./Categories.module.css";
import logo from "./logo.png";

export default function Categories() {
  const dispatch = useDispatch()

  function getAll(e){
    dispatch(getAllProducts())
  }
  
  return (
    <div className={style.container}>
      <img src={logo} alt='logoSolo' />
      <h2>Categorias</h2>
      <br />
      <Link to={"/tienda"}>
        <p onClick={e=>getAll(e)}>Todos</p>
      </Link>

      <br />
      <Link to={"/categoria/abonos"}>
        <p>Abonos</p>
      </Link>
      <br />
      <Link to={"/categoria/cosecha"}>
        <p>Cosecha</p>
      </Link>
      <br />
      <Link to={"/categoria/cultivo"}>
        <p>Cultivo</p>
      </Link>
      <br />
      <Link to={"/categoria/destacados"}>
        <p>Destacados</p>
      </Link>
      <br />
      <p>Fertilizantes</p>
      <br />
      <Link to={"/categoria/control-plagas-hongos"}>
        <p>Control de plagas y hongos</p>
      </Link>
      <br />
      <Link to={"/categoria/topcrop"}>
        <p>Top crop</p>
      </Link>
      <br />
      <Link to={"/categoria/herramientas-accesorios"}>
        <p>Herramientas y accesorios</p>
      </Link>
      <br />
      <Link to={"/categoria/iluminacion"}>
        <p>Iluminacion</p>
      </Link>
      <br />
      <p>Parafernalia y accesorios</p>
      <br />
      <Link to={"/categoria/armadores"}>
        <p>Armadores</p>
      </Link>
      <br />
      <Link to={"/categoria/bandejas"}>
        <p>Bandejas</p>
      </Link>
      <br />
      <Link to={"/categoria/papelillos"}>
        <p>Papelillos</p>
      </Link>
      <br />
      <Link to={"/categoria/picadores"}>
        <p>Picadores</p>
      </Link>
      <br />
      <Link to={"/categoria/pipas"}>
        <p>Pipas</p>
      </Link>
      <br />
      <Link to={"/categoria/varios"}>
        <p>Varios</p>
      </Link>
      <br />
      <Link to={"/categoria/pulverizadores"}>
        <p>Pulverizadores</p>
      </Link>
      <br />
      <Link to={"/categoria/sustratos"}>
        <p>Sustratos</p>
      </Link>
      <br />
    </div>
  );
}
