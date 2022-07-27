import React,{useEffect, useState} from 'react'
import {getOrders, orderByStatus} from '../../actions/index'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'


function PanelOrderAdmin() {
  const dispatch = useDispatch()



  const allOrders = useSelector(state => state.orders)
  const [orders, setOrders] = useState([])



  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch])


  function handleChange(e) {
    dispatch(orderByStatus(e.target.value))
    console.log(e.target.value)
    e.preventDefault()
  }


  return (
    <div>
      <h2>Panel De Administrador</h2>
      <div>
        <select onChange={(e) => handleChange(e.target.value)}>
          <option value="">All</option>
          <option value="On Cart">On Cart</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
      <div>
        {
          allOrders.length > 0 ? (
            allOrders.map((order,i) => (
              <div key={order.id}>
                <div>
                  <p>{order.user.email}</p>
                  <p>{order.shipping}</p>
                  <p>{order.paymentMethod}</p>
                  <p>{order.status}</p>
                  <p>{order.received}</p>
                  <p>{order.buyDate}</p>
                  <p>{order.paymentId}</p>
                  <p>{order.paymentStatus}</p>
                  <p>{order.paymentDetail}</p>
                  <div>{order.products.map((e) => {
                    return <div key={e}>
                            <Link to={`/product/${e.id}`}>{e.name}</Link>
                            </div>
                  })}</div>
                  <div>{order.products.map((e) => {
                    return <div key={e}>
                      <p>{e.price}</p>
                      <p>{e.orderline.quantity}</p>
                    </div>
                  })}</div>
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