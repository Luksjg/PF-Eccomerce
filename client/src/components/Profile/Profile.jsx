import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ordersByUser, getUser } from "../../actions/index";
import style from "./Profile.module.css";
import Page404 from "../page404/Page404";
import NavBar from "../navbar/NavBar";
import NavBarClient from "../navbarClient/NavBarClient";
import Footer from "../footer/Footer";

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
    <div className={style.fatherDiv}>
      {currentUser && currentUser.isAdmin === "si" ? (
          <NavBar />
        ) : (
          <NavBarClient/>
        )}
      <div className={style.divFirst}>
        <div className={style.cardProfile}>
          <div className={style.profileDiv}>
            <h2 className={style.h2Profile}>Profile</h2>
          </div>
          <div className={style.userDate}>
            <div>
              <p className={style.pDates}>
                <b className={style.bP}>{user.username}</b>
              </p>
              <p className={style.pDates}>
                E-mail <b className={style.bP}>{user.email}</b>
              </p>
            </div>
            <div className={style.imgDiv}>
              <img src={user.profile_img} alt="" width="50%" height="50%" />
            </div>
          </div>
          <div className={style.divH2}>
            <h2 className={style.h2OrdersProfile}>ORDENES</h2>
          </div>
          <div className={style.ordDiv}>
            {console.log(allOrders)}
            {allOrders.length > 0 ? (
              allOrders.map((order) => (
                <div key={order.id} className={style.ordersMetod}>
                  <p className={style.pDates}>
                    Estado:<b className={style.bP}>{order.status}</b>
                  </p>
                  <p className={style.pDates}>
                    Tipo de envio:<b className={style.bP}>{order.shipping}</b>
                  </p>
                  <p className={style.pDates}>
                    BuyDate:<b className={style.bP}>{order.buyDate}</b>
                  </p>
                  <p className={style.pDates}>
                    <b className={style.bP}>{order.paymentMethod}</b>
                  </p>
                </div>
              ))
            ) : (
              <div className={style.ordDiv}>
              <p className={style.pProfile}>No hay ordenes</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Profile;
