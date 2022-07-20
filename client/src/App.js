
import "./App.module.css"
import Home from "./components/home/Home.jsx"
import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import CreateProduct from "./components/createProduct/CreateProduct"
import ProductDetail from "./components/productDetail/ProductDetail"
import StorePage from "./components/storePage/StorePage"
import WeAre from "./components/weAre/WeAre"
import Page404 from "./components/page404/Page404"
import ProductsCategory from "./components/productsCategories/ProdutsCategory"
// import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register'
import ProductEdit from "./components/productEdit/ProductEdit"
import Users from "./components/users/Users"
import UserDataEdit from "./components/userDataEdit/UserDataEdit"
import UserData from "./components/userData/UserData"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/tienda" component={StorePage}/>
          <Route path='/register' component={Register}/>
          {/* <Route path='/loginjwt' component={Login}/> */}
          <Route path="/usuario/:id" component={UserData}/>
          <Route path="/usuarioedit/:id" component={UserDataEdit}/> 
          <Route path="/usuarios" component={Users}/> 
          <Route path="/producto/:id" component={ProductDetail}/>
          <Route path="/categoria/:category" component={ProductsCategory}/>
          <Route path="/editar_producto/:id" component={ProductEdit}/>
          <Route path="/crearproducto" component={CreateProduct}/> 
          <Route path="/nosotros" component={WeAre}/>
          <Route path='*' component={Page404}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
