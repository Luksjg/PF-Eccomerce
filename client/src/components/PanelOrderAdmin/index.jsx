import React,{useEffect, useState} from 'react'
import {getOrders, filterByStatus} from '../../actions/index'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'


function PanelOrderAdmin() {
  const dispatch = useDispatch()



  const allOrders = useSelector(state => state.ordersFilter)
  const [orders, setOrders] = useState([])



  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch])


  function handleFilterByStatus(e) {
    e.preventDefault()
    dispatch(filterByStatus(e.target.value))
  }


  return (
    <div>
      <h2>Panel De Administrador</h2>
      <div>
        <select onChange={handleFilterByStatus}>
          <option value="All">All</option>
          <option value="On Cart">On Cart</option>
          <option value="Creada">Creada</option>
          <option value="Procesando">Procesando</option>
          <option value="Enviada">Enviada</option>
          <option value="Cancelada">Cancelada</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
      <div>
        {
          allOrders.length > 0 ? (
            allOrders.map((order,i) => (
              <div key={order.id}>
                <div>
                  <p>Email:{order.user.email}</p>
                  <p>Tipo de envio:{order.shipping}</p>
                  <p>Metoto de Pago:{order.paymentMethod}</p>
                  <p>Estado:{order.status}</p>
                  <p>{order.received}</p>
                  <p>{order.buyDate}</p>
                  <p>{order.paymentId}</p>
                  <p>{order.paymentStatus}</p>
                  <p>{order.paymentDetail}</p>
                  <div>{order.products.map((e) => {
                    return <div key={e.id}>
                            <Link to={`/product/${e.id}`}>{e.name}</Link>
                            </div>
                  })}</div>
                  <div>{order.products.map((el) => {
                    return <div key={el.id}>
                      <p>Precio:{el.price}</p>
                      <p>Cantidad:{el.orderline.quantity}</p>
                    </div>
                  })}</div>
                </div>
                <div>
                  <button>
                    <Link to={`/orderEdit/status/${order.id}`}>
                      <p>Editar</p>
                    </Link>
                  </button>
                </div>
              </div>
          )
        )) : (
          <p>No hay ordenes</p>
        )
        }
        </div>
    </div>
  )
}

export default PanelOrderAdmin