import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext';
import ItemCount from './ItemCount';
import "./styles/itemDetail.css";
import "./styles/loading.css";




export const ItemDetail = ({ item  }) => {

    const { addItem } = useContext(CartContext);
    const [amountToBuy, setAmountToBuy] = useState(0);

   
   
    const onAdd = ( amount ) => {
        setAmountToBuy( amount );
        addItem({item, amount})
    };

    return (
        <div >
           
           
            
                   <div className="containerItemDetail">
                        <div className="itemDetail" >
                           
                         <img className= "imgContainer" src= {item.img} alt={item.name} />
                        <div>
                                <h5 >{ item.name }</h5>
                                <p >{ item.description }</p>
                                <p >$ { item.price }</p>
                                
                            </div> 


                            {amountToBuy === 0 && 
                                <ItemCount 
                                    stock = {10}
                                    initial = {1}
                                    onAdd = {onAdd}
                                />
                            }
                            {amountToBuy !== 0 &&
                                <div >    
                                    <div >
                                        <NavLink  exact to={'/cart'}>Terminar compra</NavLink>
                                    </div>
                                </div>
                            }
                       </div>

                    </div> 
            
        </div>
    );
}


export default ItemDetail