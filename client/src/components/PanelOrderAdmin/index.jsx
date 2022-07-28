import React, { useEffect, useState } from "react";
import { getOrders, filterByStatus } from "../../actions/index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

function PanelOrderAdmin() {
  const dispatch = useDispatch();

  const allOrders = useSelector((state) => state.ordersFilter);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  function handleFilterByStatus(e) {
    e.preventDefault();
    dispatch(filterByStatus(e.target.value));
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
      <div className={styles.card}>
        {allOrders.length > 0 ? (
          allOrders.map((order, i) => (
            <div className={styles.orders} key={order.id}>
              <div className={styles.cardOrder}>
                <div className={styles.dateU}>
                  <p>Email:{order.user.email}</p>
                  <p>Tipo de envio:{order.shipping}</p>
                  <p>Metoto de Pago:{order.paymentMethod}</p>
                  <p>Estado:{order.status}</p>
                </div>
                <div className={styles.dateM}>
                  <p>MP:{order.received}</p>
                  <p>dia de pago:{order.buyDate}</p>
                  <p>MP:{order.paymentId}</p>
                  <p>MP:{order.paymentStatus}</p>
                  <p>MP:{order.paymentDetail}</p>
                </div>
                <div className={styles.dateP}>
                  <div>
                    {order.products.map((e) => {
                      return (
                        <div key={e.id}>
                          <Link to={`/product/${e.id}`}>{e.name}</Link>
                        </div>
                      );
                    })}
                  </div>
                  <div className={styles.precioP}>
                    {order.products.map((el) => {
                      return (
                        <div key={el.id}>
                          <p>Precio:{el.price}</p>
                          <p>Cantidad:{el.orderline.quantity}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={styles.linkS}>
                <button>
                  <Link to={`/orderEdit/status/${order.id}`}>
                    <p>Editar</p>
                  </Link>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay ordenes</p>
        )}
      </div>
    </div>
  );
}

export default PanelOrderAdmin;
