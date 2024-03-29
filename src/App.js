import './components/styles/App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer  from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { Cart } from './components/Cart';
import CacheProvider from './provider/CacheProvider';
import {FinalOrden} from './components/FinalOrden';

 
  

function App() {
 
  
 
  return (
    <CacheProvider>
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>

         <Route exact path="/product">
          <ItemListContainer />
        </Route> 

         <Route exact path="/category/:categoryId">
            <ItemListContainer/>
          </Route> 
        
         <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route> 

        <Route exact path="/cart">
          <Cart />
        </Route>
        
          <Route exact path="/FinalOrden">
          <FinalOrden/>
        </Route>
      
      
      </Switch>


    </BrowserRouter>
    </CacheProvider>
 
    );
}

export default App;
