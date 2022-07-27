import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ordersByUser, getUser } from "../../actions/index";
import {Link} from 'react-router-dom'

function Profile() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const user = useSelector((state) => state.user);

  const allOrders = useSelector(state => state.orders);

  useEffect(() => {
    // estar pendiente de los cambios del estado
    dispatch(getUser(id));
    dispatch(ordersByUser(id));
  }, [dispatch, id]);

  console.log(allOrders, 'soy este')

  return (
    <div>
      <div>
        <h2>Profile</h2>
      </div>
      <div>
        <p>{user.email}</p>
        <p>{user.username}</p>
        <img src={user.profile_img} alt="" />
      </div>
      <div>
        <h2>ORDENES:</h2>
        {console.log(allOrders)}
        {
          allOrders.length > 0 ? (
            allOrders.map((order) => (
                <div key={order.id}>
                  <div>
                    <p>{order.shipping}</p>
                    <p>{order.paymentMethod}</p>
                    <p>{order.status}</p>
                    <p>{order.received}</p>
                    <p>{order.buyDate}</p>
                    <p>{order.paymentId}</p>
                    <p>{order.paymentStatus}</p>
                    <p>{order.paymentDetail}</p>
                    
                  </div>
                </div>
            )
        )) : (
          <p>No hay ordenes</p>
        )
        }
      </div>
    </div>
  );
}

export default Profile;
