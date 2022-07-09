import React from "react"
import { Link } from "react-router-dom"

export default function Categories(){

    return(
        <div>
            <Link to={"/categoria/prueba"}>prueba</Link>
            <Link to={"/categoria/abonos"}>Abonos</Link>
            <Link to={"/categoria/cosecha"}>Cosecha</Link>
            <Link to={"/categoria/cultivo"}>Cultivo</Link>
            <Link to={"/categoria/destacados"}>Destacados</Link>
            <p>Fertilizantes</p>
            <Link to={"/categoria/control-plagas-hongos"}>Control de plagas y hongos</Link>
            <Link to={"/categoria/topcrop"}>top crop</Link>
            <p>---------------</p>
            <Link to={"/categoria/herramientas-accesorios"}>Herramientas y accesorios</Link>
            <Link to={"/categoria/iluminacion"}>Iluminacion</Link>´
            <p>Parafernalia y accesorios para fumadores</p>
            <Link to={"/categoria/armadores"}>Armadores</Link>
            <Link to={"/categoria/bandejas"}>Bandejas</Link>
            <Link to={"/categoria/papelillos"}>Papelillos</Link>
            <Link to={"/categoria/picadores"}>Picadores</Link>
            <Link to={"/categoria/pipas"}>Pipas</Link>
            <Link to={"/categoria/varios"}>Varios</Link>
            <p>---------------</p>
            <Link to={"/categoria/pulverizadores"}>pulverizadores</Link>
            <Link to={"/categoria/sustratos"}>Sustratos</Link>
        </div>
    )
}