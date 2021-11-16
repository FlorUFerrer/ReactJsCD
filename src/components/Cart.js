import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import { NavLink } from 'react-router-dom';
import { CartItem } from './CartItem';

export const Cart = () => {

    const { cache, clear, cacheSize, cartTotalAmount } = useContext(CartContext);

    return (
        <div >
            <h1>CARRITO</h1> 
            
            { cacheSize !== 0 &&
                <button  disabled>Total de compra: $ {cartTotalAmount}</button>
            }

            { cacheSize === 0 && 
                <div >
                    <div>
                        <p >No dispone de items agregados</p>
                    </div>
                    <NavLink  exact to={"/"}>Volver al inicio</NavLink>
                </div>
            }

            { cacheSize !== 0 &&
                <div>
                    <div>
                        {
                            cache.map( item =>
                                <div key={item.item.data.id}>
                                    <CartItem
                                        item = { item }
                                    />
                                </div>
                            )
                        }  
                    </div>
                    <NavLink  exact to={"/"}>Seguir Comprando</NavLink>
                    <button  onClick={() => clear()}>Vaciar carrito</button>
                </div>
            }

        </div>
    )
}