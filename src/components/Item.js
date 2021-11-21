import React from 'react';
import './styles/itemList.css'
import "./styles/itemList.css";
import { Link } from 'react-router-dom';
 


export const Item = ({ producto}) => {

    return (
        <div className="containerCard" >
             <div className="card">
                
                <img className="sizeImg" src= {producto.img} alt={producto.name} />
                <h3>{producto.name}</h3>
                <h3>${producto.price}</h3>
               
                <Link  to={`/item/${producto.id}`}>
                             <button className="details">Comprar</button>
                </Link>
              </div>
           
        </div>
    );

}