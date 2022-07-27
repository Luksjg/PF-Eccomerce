import React from 'react'
import { Link } from 'react-router-dom'

function Card({id,img, name, price,total ,shipping, paymentMethod, status, received, buyDate, paymentId, paymentStatus, paymentDetail}) {
  return (
    <div>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <Link to={`/product/${id}`}>{name}</Link>
            <p>{price}</p>
            <p>{total}</p>
            <p>{shipping}</p>
            <p>{paymentMethod}</p>
            <p>{status}</p>
            <p>{received}</p>
            <p>{buyDate}</p>
            <p>{paymentId}</p>
            <p>{paymentStatus}</p>
            <p>{paymentDetail}</p>
          </div>
    </div>
  )
}

export default Card