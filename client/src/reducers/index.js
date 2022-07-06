import {GET_ALL_PRODUCTS, GET_BY_CATEGORY, GET_PRODUCT, GET_ALL_USERS, GET_USER, GET_REVIEWS, EDIT_USER_ADMIN, DELETE_USER, NEW_SUB} from "../actions/index"

const InitialState={
    allProducts : [],
    products: [],
    product: undefined,
    users: [],
    user: undefined,
    reviews: [],
    subs: []
}

function rootReducer(state = InitialState, action){
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                allProducts: action.payload
            }
        case GET_PRODUCT:
            let productFound = state.allProducts.filter(p => p.name === action.payload)
            return{
                ...state,
                product: productFound
            }
        case GET_BY_CATEGORY:
            let productsFound = state.allProducts.filter(p=> p.category = action.payload )
            return{
                ...state,
                products: productsFound 
            } 
        case GET_ALL_USERS:
            return{
                ...state,
                users: action.payload
            }
        case NEW_SUB:
            let subs = state.subs.filter(s=> s.email !== action.payload.email)
            return{
                ...state,
                subs: [subs, action.payload]
            }
        case GET_USER:
            return{
                ...state,
                user: action.payload
        }
        case GET_REVIEWS:
            return{
                ...state,
                reviews: action.payload
            }
        case EDIT_USER_ADMIN:
            return{
                ...state,
                user: action.payload
            }
        case DELETE_USER:
            let users = state.users.filter(u=> u.name !== action.payload)
            return{
                ...state,
                users: users
            }
        default:
            return state
        }
}

export default rootReducer