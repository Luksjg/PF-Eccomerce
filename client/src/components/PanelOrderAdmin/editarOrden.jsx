import React,{ useEffect, useState }from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import {Link,useParams,useHistory} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import {getOrders, putOrder} from '../../actions/index'

function EditarOrden() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getOrders(id))
    }
    , [dispatch,id])

    const orders = useSelector(state => state.orders)

    const [input , setInput] = useState({
        shipping: orders[0].shipping,
        paymentMethod: orders[0].paymentMethod,
        status: orders[0].status,
    })

    async function handleSubmit(e) {
        e.preventDefault()
        dispatch(putOrder(id,input))
        console.log(input,id)
        alert('Orden Actualizada')
        history.push('/PanelAdminOrd')
    }
    
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


  return (
    <div>
        <div>
            <NavBar/>
            <br/><br/>
            <div>---------------------------------------</div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h2>Editar Orden</h2>
                </div>
                <div>
                    <label>
                        <p>shipping</p>
                        <select onChange={handleChange}>
                            <option value="Envio a domicilio">Envio a domicilio</option>
                            <option value="Retiro en tienda">Retiro en tienda</option>
                        </select>
                        <p>PaymentMethod:</p>
                        <select onChange={handleChange}>
                            <option value="Tarjeta de Credito">Tarjeta de Credito</option>
                            <option value="Tarjeta de Debito">Tarjeta de Debito</option>
                        </select>
                        <p>Status:</p>
                        <select onChange={handleChange}>
                            <option value="On Cart">On Cart</option>
                            <option value="Creada">Creada</option>
                            <option value="Procesando">Procesando</option>
                            <option value="Enviada">Enviada</option>
                            <option value="Completa">Completa</option>
                        </select>
                        <p></p>
                        <select onChange={handleChange}>
                            <option value="null">null</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button type="submit" onSubmit={(e) => handleSubmit(e)}>Actualizar</button>
                </div>
            </form>
            <span><Link to={`/`}>Cancelar</Link></span>
            <div>---------------------------------------</div>
            <Footer/>
        </div>
    </div>
  )
}

export default EditarOrden