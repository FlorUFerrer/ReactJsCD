
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext';
import ItemCount from './ItemCount';
import "./styles/itemDetail.css";
import "./styles/loading.css";




export const ItemDetail = ({ item }) => {

    const { addItem } = useContext(CartContext);
  
    const [amountToBuy, setAmountToBuy] = useState(0);

    const onAdd = ( amount ) => {
        setAmountToBuy( amount );
        addItem({item, amount})
    }

    return (
        <div >
            <div >
                
                { item.loading && <p className="loading"></p> }

                { !item.loading &&
                    <div className="containerItemDetail">
                        <div className="itemDetail" >
                            <img className= "imgContainer" src= {item.data.img} alt={item.data.name} />
                            <div>
                               <h5 >{ item.data.name }</h5>
                                <p >{ item.data.description }</p>
                                <p >$ { item.data.price }</p>
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
                  
                }
          
                
            </div>
        </div>
    );
}
