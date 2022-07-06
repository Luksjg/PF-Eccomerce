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

export function getAllProducts(){
    return async function(dispatch){
        let data = await axios.get('http://localhost:3001/product');
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: data
        })
    }
}

export function getAllUsers(){
    return async function(dispatch){
        let data = await axios.get('http://localhost:3001/user');
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: data
        })
    }
}

export function getReviews(){
    return async function(dispatch){
        let data = await axios.get(`http://localhost:3001/review`)
        return dispatch({
            type: GET_REVIEWS,
            payload: data
        })
    }
}

export function getUser(id){
    return async function(dispatch){
        let data = await axios.get(`http://localhost:3001/user/${id}` );
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: data
        })
    }
}


export function deleteUser(id){
    return async function(dispatch){
        let data = await fetch(`http://localhost:3001/user/${id}`, { method: 'DELETE' });
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
        let data = await axios.put(`http://localhost:3001/user/${id}`)
        return dispatch({
            tye: EDIT_USER_ADMIN,
            payload: data
        })
    }
}

export function getByCategory(category){
    return{
        type: GET_BY_CATEGORY,
        payload: category
    }
}

export function getProduct(name){
    return{
        type: GET_PRODUCT,
        payload: name
    }
}