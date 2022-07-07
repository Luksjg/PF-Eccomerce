import React from "react"
import {Link} from 'react-router-dom'


export default function NavBar(){

    return(
    <div>
        <Link to="/"><img src="https://www.pnguniverse.com/wp-content/uploads/2020/12/Marihuana.png" alt="icon" width="100" height="100"></img></Link>
        <Link to="/"><label>Home</label></Link>
        <Link to="/tienda"><label>Tienda</label></Link>    
        <Link to="/nosotros"><label>Nosotros</label></Link>
        <Link to="/create"><label>Crear producto </label></Link> {/* Only visible in admin user */}
    </div>
    )
}