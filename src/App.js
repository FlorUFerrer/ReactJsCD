import './components/styles/App.css';
import NavBar from './components/NavBar';
import ItemListContainer  from './components/ItemListContainer';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import CacheProvider from './provider/CacheProvider';


 
  

function App() {
 
  
 
  return (
    <CacheProvider>
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <ItemListContainer greetings="Productos"/>
        </Route>

        <Route exact path="/category/:category">
          <ItemListContainer greetings="Productos"/>
        </Route>

        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>
      
      </Switch>


    </BrowserRouter>
    </CacheProvider>
 
    );
}

export default App;
