import './components/styles/App.css';
//import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer  from './components/ItemListContainer';
//import Counter from './components/ItemCount';
//import { useState } from 'react';
//import {Mensaje} from './components/Mensaje'


  
 
  

function App() {
  
  
 
  return (
    <div >
        <header className="App-header">
          <NavBar/>
        <ItemListContainer/> 
       
        </header>
      </div>
    );
}

export default App;
