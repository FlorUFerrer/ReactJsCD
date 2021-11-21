import React, { useContext } from 'react'
import CartContext from '../context/CartContext';
import './styles/Cart.css'

export const CartItem = ({item}) => {

    const { removeItem } = useContext(CartContext);

    return (
        <div >
             <div className="containerCart">
                <div className="cartContainerCard" >
                    <div className="cardCart" >
                        <div >
                        <img className= "imgContainer" src= {item.item.data.img} alt={item.item.data.name} />  
                        </div>
                        <div >
                            <div >
                            <h5 >{ item.item.data.title }</h5>
                            <p ><small >{ item.item.data.description }</small></p>
                            <p >Cantidad : { item.amount }, Precio individual: $ { item.item.data.price }</p>
                            <p ><strong>Costo Total: ${ item.item.data.price * item.amount }</strong></p>
                            </div>
                        </div>
                        <div >
                           
                            <button className="buttonEstilo" onClick={() => removeItem(item.item.data.id)}>Quitar del carrito</button>
                        </div>
                    </div>
                </div>    
            </div>    
        </div>
    )
}