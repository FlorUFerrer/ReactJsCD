import React from 'react';
import './styles/itemList.css'
import "./styles/itemList.css";
import { Link } from 'react-router-dom';
 


export const Item = ({ data }) => {

    return (
        <div className="containerCard" >
             <div className="card">
                
                             
                 
                 <img className="sizeImg" src= {data.img} alt={data.name} />
                <h3>{data.name}</h3>
                <h3>${data.price}</h3>
               
                <Link  to={`/item/${data.id}`}>
                             <button className="details">Comprar</button>
                </Link> 
              </div>
           
        </div>
    );

}