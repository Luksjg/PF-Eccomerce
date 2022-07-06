import "./App.module.css"
import Home from "./components/home/Home.jsx"
import {BrowserRouter, Route, Switch} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route exact path="/tienda" component={Store}/>  */}
          {/* <Route path="/tienda/:producto" componente={productDetail}/> */}
          {/* <Route path="/edit" component={editPage}/>  */}
          {/* <Route path="/crearproducto" component={createProduct}/>  */}
          {/* <Route path="/nosotros" component={weAreTheChampions}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
