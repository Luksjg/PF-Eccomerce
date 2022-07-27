import {
  GET_ALL_PRODUCTS,
  GET_OUTSADING_PRODUCTS,
  GET_BY_CATEGORY,
  GET_PRODUCT,
  GET_REVIEWS,
  EDIT_USER,
  DELETE_USER,
  NEW_SUB,
  ORDER,
  LOGIN,
  REGISTER,
  GET_BY_NAME,
  GET_USERS,
  GET_USER,
  RESET_PASSWORD,
  CART_OF_USER,
  GET_ALL_USERS,
} from "../actions/index";

const InitialState = {
  allProducts: [],
  products: [],
  outsandingProducts: [],
  product: [],
  users: [],
  user: [],
  userInfo: [],
  cart: [],
  reviews: [],
  subs: [],
  allUsers: [],
  estadopepito: [],
};

function orderP(a, b) {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
}

function rootReducer(state = InitialState, action) {
  switch (action.type) {
    case CART_OF_USER:
      console.log(action.payload);
      return {
        ...state,
        cart: action.payload,
      }
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case GET_OUTSADING_PRODUCTS:
      return {
        ...state,
        outsandingProducts: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_BY_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case ORDER:
      let sortedProducts;
      if (action.payload === "az")
        sortedProducts = state.products.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      else if (action.payload === "za")
        sortedProducts = state.products.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      else if (action.payload === "maxPrice")
        sortedProducts = state.products.sort(orderP);
      else if (action.payload === "minPrice")
        sortedProducts = state.products.sort(orderP).reverse();
      else sortedProducts = state.allProducts;
      return {
        ...state,
        products: sortedProducts,
      };
    case NEW_SUB:
      let subs = state.subs.filter((s) => s.email !== action.payload.email);
      return {
        ...state,
        subs: [subs, action.payload],
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case EDIT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_USER:
      let users = state.users.filter((u) => u.name !== action.payload);
      return {
        ...state,
        users: users,
      };
    case LOGIN:
      return {
        ...state,
        userInfo: action.payload,
      };
    case REGISTER:
      return {
        ...state,
        userInfo: action.payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        userInfo: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
// } David estuvo aqui