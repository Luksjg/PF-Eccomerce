import axios from 'axios'

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const GET_BY_CATEGORY = "GET_BY_CATEGORY"
export const GET_PRODUCT = "GET_PRODUCT"
export const GET_ALL_USERS = "GET_ALL_USERS"
export const GET_USER = "GET_USER"
export const DELETE_USER = "DELETE_USER"
export const GET_REVIEWS = "GET_REVIEWS"
export const EDIT_USER_ADMIN = "EDIT_USER_ADMIN" 
export const NEW_SUB = "NEW_SUB"
export const GET_OUTSADING_PRODUCTS = "GET_OUTSADING_PRODUCTS"
export const ORDER = "ORDER"
export const LOGIN = "LOGIN"
export const REGISTER = "REGISTER"
export const LOGIN_GOOGLE = "LOGIN_GOOGLE"


export function getAllProducts(){
    return async function(dispatch){
        let data = await axios.get('https://green--shop.herokuapp.com/products');
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: data.data
        })
    }
}

export function getOutsandingProducts(){
    return async function(dispatch){
        let data = await axios.get('https://green--shop.herokuapp.com/products/destacado')
        return dispatch({
            type: GET_OUTSADING_PRODUCTS,
            payload: data.data
        })
    }
}

export function getByCategory(category){
    return async function(dispatch){
    let data = await axios.get(`https://green--shop.herokuapp.com/filters/category/${category}`)
    return dispatch({
        type: GET_BY_CATEGORY,
        payload: data.data
    })
    }
}

export function order(order){
    return async function(dispatch){
        let data = await axios.get(`https://green--shop.herokuapp.com/filters/${order}`)
        return dispatch({
            type: ORDER,
            payload: data.data
        })
    }
}

export function getProduct(id){
    return async function(dispatch){
        let data = await axios.get(`https://green--shop.herokuapp.com/products/${id}`)
        return dispatch({
            type: GET_PRODUCT,
            payload: data.data
        })
    }
}

export function postProduct(payload){
    return async function(dispatch){
        let data = await axios.post(`https://green--shop.herokuapp.com/products`, payload)
        return dispatch({
            type: GET_PRODUCT,
            payload: data.data
        })
    }
}

export function postReview(payload){
    return async function(){
        let data = await axios.post(`https://green--shop.herokuapp.com/review/POST`, payload)
        return data
    }
}


export function getReviews(id){
    return async function(dispatch){
        let data = await axios.get(`https://green--shop.herokuapp.com/review/${id}`)
        return dispatch({
            type: GET_REVIEWS,
            payload: data.data
        })
    }
}

export function getUser(id){
    return async function(dispatch){
        let data = await axios.get(`https://green--shop.herokuapp.com/user/${id}` );
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: data
        })
    }
}


export function deleteUser(id){
    return async function(dispatch){
        let data = await fetch(`https://green--shop.herokuapp.com/user/${id}`, { method: 'DELETE' });
        return dispatch({
            type: DELETE_USER,
            payload: data
        })
    }
}

export function newSub(payload){
    return{
        type: NEW_SUB,
        payload: payload
    }
}

export function editUserAdmin(id){
    return async function(dispatch){
        let data = await axios.put(`https://green--shop.herokuapp.com/user/${id}`)
        return dispatch({
            tye: EDIT_USER_ADMIN,
            payload: data
        })
    }
}

export function login(payload){
    return async function(dispatch){
        let data = await axios.post(`https://green--shop.herokuapp.com/user/login`, payload)
        return dispatch({
            type: LOGIN,
            payload: data
        })
    }
}

export function register(payload){
    return async function(dispatch){
        let data = await axios.post(`https://green--shop.herokuapp.com/user/register`, payload)
        return dispatch({
            type: REGISTER,
            payload: data
        })
    }
}

export function loginGoogle(payload){
    return async function(dispatch){
        let data = await axios.post(`https://green--shop.herokuapp.com/auth/google`, payload)
        return dispatch({
            type: LOGIN_GOOGLE,
            payload: data
        })
    }
}



