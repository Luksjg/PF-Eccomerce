import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getReviews, postReview } from "../../actions"

export default function Comments(){
    
    const idProduct = useParams()

    const [input,setInput] = useState({
        productId:idProduct.id,
        review:"",
        valoration:0, 
        // userId:""
    })

    const dispatch = useDispatch()
    const reviews = useSelector((state) => state.reviews)

    function handleChange(e){
        setInput({
            ...input, 
            [e.target.name] : e.target.value
        })
    }
    async function handleSubmit(e){
        if(!input.review){
            e.preventDefault()
            return alert('Complete todos los campos para poder continuar')
        }else{
            e.preventDefault()
            setInput({
                ...input,
                valoration:Number(input.valoration)
            })
            dispatch(postReview(input));
            setInput({
                review:"",
                valoration:0, 
            })
        }
    }

    useEffect(()=>{
        dispatch(getReviews(idProduct.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[input])

    return(
        <div>
            <div>
                <form onSubmit={e=> handleSubmit(e)}>

                    {/* <p>UserId POR AHORA</p>
                     No se como van a obtener el userId desde este componente, con auth0 se puede 
                    <input type="text" value={input.userId} name="userId" onChange={e=>handleChange(e)} placeholder="Usuario..."/> */}

                    <p>Deja una reseña</p>
                    <input type="text" value={input.review} name="review" onChange={e=>handleChange(e)} placeholder="Comentario..."/>
                    <p>califilacion</p>
                        <select value={input.valoration} name="valoration" onChange={e=>handleChange(e)}>
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    <button type="submit">Comentar</button>
                </form>
            </div>
            <div>-------------------------------------------------------------------------</div>
            <div>
                {reviews && reviews.map((r,i)=>
                    <div key={i}>
                        <p>{r.review}</p>
                        <label>{r.valoration}</label>
                    </div>
                )}
            </div>

        </div>
    )
}