import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { orderToMP } from "../../actions"

export default function FormMP(){

    const data = useSelector(state=>state.guardarMP)
    const dispatch = useDispatch()

    function submit(){
        dispatch(orderToMP(data))
    }
    return(
        <div>
            <form>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </form>
        </div>
    )
}