import React, { useState } from "react"
import Footer from "../footer/Footer"
import NavBar from "../navbar/NavBar"
import { useDispatch, useSelector} from "react-redux";
import { getUsers } from "../../actions";
import { Link } from "react-router-dom";

export default function Users(){

    const [name,setName] = useState("")
    const users = useSelector(state=>state.users)
    const dispatch = useDispatch()

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getUsers(name));
        setName("");
    }


    return(
        <div>
            <NavBar/>
            <br/><br/>
            <div>------------------------------------</div>
            <div>
            <form onSubmit={(e) => handleClick(e)}>
              <input type='text' value={name} placeholder='Buscar usuario...' onChange={(e) => handleInputChange(e)}/>
              <button type='submit'> Buscar </button>
            </form>
            </div>
            <div>------------------------------------</div>
            {users && 
            users.map((u,i)=>{
                return(
                    <div key={i}>
                    <Link to={`/usuario/${u.id}`}>
                        <p>{u.username}</p>
                        <p>{u.email}</p>
                        <p>{u.profile_img}</p>
                        {u.is_admin ? <div>Es admin</div> : <div>No es admin</div>}
                    </Link>
                    </div>
                )
            })
            }
            <div>------------------------------------</div>
            <Footer/>
        </div>
    )
}