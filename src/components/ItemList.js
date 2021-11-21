
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./styles/itemList.css";
import "./styles/loading.css";




export const ItemList = ( product ) => {
   
  
    return (


<div className="containerCard" >
             <div className="card">
                <img className="sizeImg" src= {product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <h3>${product.price}</h3>
              
                <NavLink to={`/producto/${product.id}`}><button className="details">DETALLES </button></NavLink>
                        
            </div>
           
       </div>
      
    );
  };