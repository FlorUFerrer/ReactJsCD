import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext'
import { CartItem } from './CartItem';
import './styles/Cart.css'

export const Cart = () => {

    const { cache, clear, cacheSize, cartTotalAmount } = useContext(CartContext);
  
   
  

    return (
        <div >
            <h1>CART</h1> 
            
           

            { cacheSize === 0 && 
                <div className="estiloSinItems" >
                    <div>
                        <p >No tiene items agregados</p>
                    </div>
                    <NavLink  exact to={"/"}>Volver al inicio</NavLink>
                </div>
            }


            { cacheSize !== 0 &&
                <div>
                    <div>
                        <div className="containerCart">
                       { cache.map((item) => 
                       <CartItem key={item.id} item={item}/> )
                    
                        }
                           
                        </div>
                     
                        <div className="containerVaciarSeguir ">
                              <button  >Total de compra: $ {cartTotalAmount}</button>
                            <NavLink  exact to={"/"}> <button className="buttonSeguir">Seguir Comprando</button></NavLink>
                            <button className="buttonVaciar" onClick={() => clear()}>Vaciar carrito</button>
                            <NavLink  exact to={"/finalOrden"}>Finalizar mi compra</NavLink>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}