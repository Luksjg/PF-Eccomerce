import { async } from "@firebase/util";
import axios from "axios";
import Swal from "sweetalert2";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_BY_CATEGORY = "GET_BY_CATEGORY";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";
export const GET_REVIEWS = "GET_REVIEWS";
export const EDIT_USER = "EDIT_USER";
export const NEW_SUB = "NEW_SUB";
export const GET_OUTSADING_PRODUCTS = "GET_OUTSADING_PRODUCTS";
export const ORDER = "ORDER";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const GET_BY_NAME = "GET_BY_NAME";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const GET_USER = "GET_USER";
export const CART_OF_USER = "CART_OF_USER";
export const GET_ORDERS = "GET_ORDERS";
export const ORDER_BY_STATUS = "ORDER_BY_STATUS";
export const ORDERS_BY_USER = "ORDERS_BY_USER";
export const EDIT_ORDER = "EDIT_ORDER";
export const ORDER_TO_MP = "ORDER_TO_MP";
export const GUARDAR = "GUARDAR";
export const GUARDARMP = "GUARDARMP";



export function postShipping(payload) {
  return async function(dispatch) {
    let data = await axios.post(`https://green--shop.herokuapp.com/envio`, payload);
    return data
  }
}

export function guardar(payload){
  return{
    type:GUARDAR,
    payload:payload
  }
}

// export function guardarMP(payload){
//   return{
//     type:GUARDARMP,
//     payload:payload
//   }
// }
export function orderToMP(payload){
  // console.log(payload)
  return async function (dispatch) {
    let data = await axios.post(
      `https://green--shop.herokuapp.com/mp/5`,
      payload
    );
    console.log(data);
    // return data
    return dispatch({
      type: ORDER_TO_MP,
      payload: data.data.init_point
    })
  }
}

export function putOrder(id, payload) {
  console.log(payload);
  return async function (dispatch) {
    let data = await axios.put(
      `https://green--shop.herokuapp.com/tadeo/orders/status/${id}`,
      payload
    );
    return dispatch({
      type: EDIT_ORDER,
      payload: data.data,
    });
  };
}

export const getOrders = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "https://green--shop.herokuapp.com/tadeo/order/admin/product"
    );
    dispatch({
      type: GET_ORDERS,
      payload: res.data,
    });
  };
};

export const ordersByUser = (id) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://green--shop.herokuapp.com/tadeo/users/${id}/orders`
    );
    dispatch({
      type: ORDERS_BY_USER,
      payload: res.data,
    });
  };
};

export function filterByStatus(payload) {
  return {
    type: ORDER_BY_STATUS,
    payload,
  };
}

export const resetPassword = (id, token) => {
  return (dispatch) => {
    axios
      .post(
        `https://green--shop.herokuapp.com/users/resetPassword/${id}/${token}`
      )
      .then((res) => {
        dispatch({
          type: RESET_PASSWORD,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export function getAllProducts() {
  return async function (dispatch) {
    let data = await axios.get("https://green--shop.herokuapp.com/products");
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: data.data,
    });
  };
}

export function addToCart(product, id) {
  console.log(product)
  console.log("puto", id)
  return async function (dispatch) {
    // console.log(product)
    let data = await axios.post(
      `https://green--shop.herokuapp.com/tadeo/add/${id}`,
      product
    );
    return dispatch({
      type: CART_OF_USER,
      payload: data,
    });
  };
}

export function cofirmarCompra(product, id) {
  return async function (dispatch) {
    let data = await axios.post(
      `https://green--shop.herokuapp.com/tadeo/users/${id}`, product
    );
    return dispatch({
      type: CART_OF_USER,
      payload: data.data.products,
    });
  };
}

export function getOutsandingProducts() {
  return async function (dispatch) {
    let data = await axios.get(
      "https://green--shop.herokuapp.com/products/destacado"
    );
    return dispatch({
      type: GET_OUTSADING_PRODUCTS,
      payload: data.data,
    });
  };
}

export function getByCategory(category) {
  return async function (dispatch) {
    let data = await axios.get(
      `https://green--shop.herokuapp.com/filters/category/${category}`
    );
    return dispatch({
      type: GET_BY_CATEGORY,
      payload: data.data,
    });
  };
}

export function order(payload) {
  console.log(payload);
  return {
    type: ORDER,
    payload,
  };
}

export function getProduct(id) {
  return async function (dispatch) {
    let data = await axios.get(
      `https://green--shop.herokuapp.com/products/${id}`
    );
    return dispatch({
      type: GET_PRODUCT,
      payload: data.data,
    });
  };
}

export function getByName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        "https://green--shop.herokuapp.com/products?name=" + name
      );
      console.log(json);
      if (json.data.length < 1) {
        Swal.fire(
          "Producto no encontrado",
          "Por favor intente con otro nombre",
          "error"
        );
      } else {
        return dispatch({
          type: GET_BY_NAME,
          payload: json.data,
        });
      }
    } catch (error) {
      console.log("No se pudo encontrar el pais");
    }
  };
}

export function postProduct(payload) {
  return async function (dispatch) {
    let data = await axios.post(
      `https://green--shop.herokuapp.com/products`,
      payload
    );
    return dispatch({
      type: GET_PRODUCT,
      payload: data.data,
    });
  };
}

export function editProduct(payload, id) {
  return async function (dispatch) {
    let data = await axios.put(
      `https://green--shop.herokuapp.com/products/putProducto/${id}`,
      payload
    );
    return dispatch({
      type: EDIT_PRODUCT,
      payload: data.data,
    });
  };
}

export function postReview(payload) {
  return async function () {
    let data = await axios.post(
      `https://green--shop.herokuapp.com/review/POST`,
      payload
    );
    return data;
  };
}

export function getReviews(id) {
  return async function (dispatch) {
    let data = await axios.get(
      `https://green--shop.herokuapp.com/review/${id}`
    );
    return dispatch({
      type: GET_REVIEWS,
      payload: data.data,
    });
  };
}

export function getUsers(name) {
  return async function (dispatch) {
    let data = await axios.get(
      `https://green--shop.herokuapp.com/user?userName=${name}`
    );
    return dispatch({
      type: GET_USERS,
      payload: data.data,
    });
  };
}

export function getUser(id) {
  return async function (dispatch) {
    let data = await axios.get(`https://green--shop.herokuapp.com/user/${id}`);
    return dispatch({
      type: GET_USER,
      payload: data.data,
    });
  };
}

export function putUser(id, payload) {
  return async function (dispatch) {
    let data = await axios.put(
      `https://green--shop.herokuapp.com/user/modified/${id}`,
      payload
    );
    return dispatch({
      type: EDIT_USER,
      payload: data.data,
    });
  };
}

export function deleteUser(id) {
  return async function (dispatch) {
    let data = await fetch(`https://green--shop.herokuapp.com/user/${id}`, {
      method: "DELETE",
    });
    return dispatch({
      type: DELETE_USER,
      payload: data,
    });
  };
}

export function newSub(payload) {
  return {
    type: NEW_SUB,
    payload: payload,
  };
}

export function login(payload) {
  return async function (dispatch) {
    let data = await axios.post(
      `https://green--shop.herokuapp.com/user/login`,
      payload
    );
    return dispatch({
      type: LOGIN,
      payload: data,
    });
  };
}

export function register(payload) {
  return async function (dispatch) {
    let data = await axios.post(
      `https://green--shop.herokuapp.com/user/register`,
      payload
    );
    return dispatch({
      type: REGISTER,
      payload: data,
    });
  };
}

export function getAllUsers() {
  return async function (dispatch) {
    let data = await axios.get(
      `https://green--shop.herokuapp.com/user/allUsers`
    );
    return dispatch({
      type: GET_ALL_USERS,
      payload: data.data,
    });
  };
}
