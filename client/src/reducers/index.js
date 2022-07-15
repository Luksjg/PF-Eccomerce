import {GET_ALL_PRODUCTS,GET_OUTSADING_PRODUCTS, GET_BY_CATEGORY, GET_PRODUCT, GET_USER, GET_REVIEWS, EDIT_USER_ADMIN, DELETE_USER, NEW_SUB, ORDER, LOGIN, LOGIN_GOOGLE,REGISTER} from "../actions/index"

const InitialState={
    allProducts : [],
    products: [],
    outsandingProducts:[],
    product: [],
    user: [],
    userInfo: [],
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
            return{
                ...state,
                product: action.payload
            }
        case GET_OUTSADING_PRODUCTS:
            return{
                ...state,
                outsandingProducts : action.payload
            }
        case GET_BY_CATEGORY:
            return{
                ...state,
                products: action.payload
            } 
        case ORDER:
            return{
            ...state,
            products: action.payload
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
        case LOGIN:
            return{
                ...state,
                userInfo: action.payload
            }
        case LOGIN_GOOGLE:
            return{
                ...state,
                userInfo: action.payload
            }
        case REGISTER:
            return{
                ...state,
                userInfo: action.payload
            }
        default:
            return state
        }

}

export default rootReducer;
