import React, { useContext } from 'react'
import CartContext from '../context/CartContext';
import './styles/Cart.css'



export const CartItem = ({item ,id}) => {

   
    const { removeItem } = useContext(CartContext);
 
    //console.log("AQUIIII",item.item)
    console.log("ID",id)
    return (
        <>  
                <div >
                    <div className="containerCart">
                        <div className="cartContainerCard" >
                            <div className="cardCart" >
                              
                                <h5 >{ item.item.name }</h5>
                               
                                   <div >
                                    <img className= "imgContainer" src= {item.item.img} alt={item.item.name} />  
                                </div>
                                 <div >
                                    <div>
                                        <h5 >{ item.item.name }</h5>
                                        <p ><small >{ item.item.description }</small></p>
                                        <p >Cantidad : { item.amount }, Precio individual: $ { item.item.price }</p>
                                        <p ><strong>Costo Total: ${ item.item.price * item.amount }</strong></p>
                                    </div>
                                </div>     
                            </div> 
                                <div > 
                                    <button className="buttonEstilo" onClick={() => removeItem(item.id)}>Quitar del carrito</button>
                                </div>
                            </div>
                        </div>    
                    </div>  
                   
                      
       </> 
    )
}