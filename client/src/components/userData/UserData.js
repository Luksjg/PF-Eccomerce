import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getUser } from "../../actions"
import Footer from "../footer/Footer"
import NavBar from "../navbar/NavBar"

export default function UserData(){
    const {id} = useParams()
    const dispatch = useDispatch()

    
    useEffect(()=>{
        dispatch(getUser(id))
    },[dispatch,id])

    const user = useSelector((state) => state.user)
    


    return(
        <div>
            <NavBar/>
            <br/><br/>
            <img src={user.profile_img} alt="img" width='250' height='250'></img>
            <p>{user.username}</p>
            <p>{user.email}</p>
            {user.isAdmin ? <p>Es admin</p> : <p>No es admin</p>}
            <div>
                <Link to={`/usuarioedit/${id}`}>
                  <span>Editar usuario</span>
                </Link>
            <Footer/>
            </div>
        </div>
    )
}