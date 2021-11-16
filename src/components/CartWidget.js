import './styles/CartWidget.css'
import imagenCarrito from './img/carritoCompras.png';
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';



export const CartWidget = () => {

    const { cacheSize } = useContext(CartContext);

     return(
        <div> 
            
            
            <NavLink className="nav-link" activeClassName="selected" exact to={"/cart"}>
               
            <img className="imagenCarrito" src={imagenCarrito} alt="carrito" /> { cacheSize !== 0 && <sup>{cacheSize}</sup> }
            </NavLink>
    
            
        </div> 
    )
}

 export default CartWidget 

