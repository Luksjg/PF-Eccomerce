import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ordersByUser, getUser } from "../../actions/index";
import style from "./Profile.module.css";
import Page404 from "../page404/Page404";


function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState("");

  const user = useSelector((state) => state.user);

  const allOrders = useSelector((state) => state.orders);

  useEffect(() => {
    // estar pendiente de los cambios del estado
    dispatch(getUser(id));
    dispatch(ordersByUser(id));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }, [dispatch, id]);

  console.log(allOrders, "soy este");

  return (
    <div>
      <div className={style.cardProfile}>
        <div className={style.profileDiv}>
          <h2 className={style.h2Profile}>Profile</h2>
        </div>
        <div className={style.userDate}>
          <div>
            <p className={style.pDates}>Email:{user.email}</p>
            <p className={style.pDates}>User name:{user.username}</p>
          </div>
          <div className={style.imgDiv}>
            <img src={user.profile_img} alt="" width='20%' height="20%" />
          </div>
        </div>
        <div className={style.ordDiv}>
          <h2 className={style.h2OrdersProfile}>ORDENES:</h2>
          {console.log(allOrders)}
          {allOrders.length > 0 ? (
            allOrders.map((order) => (
              <div key={order.id}>
                <div className={style.ordersMetod}>
                  <p className={style.pProfile}>Estado:{order.status}</p>
                  <p className={style.pProfile}>Tipo de envio:{order.shipping}</p>
                  <p className={style.pProfile}>BuyDate:{order.buyDate}</p>
                  <p className={style.pProfile}>{order.paymentMethod}</p>
                </div>
              </div>
            ))
          ) : (
            <p className={style.pProfile}>No hay ordenes</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
