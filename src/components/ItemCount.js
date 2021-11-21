import React, { useState } from 'react';
import "./styles/ItemCount.css"



export const ItemCount = ({stock, initial, onAdd}) => {

    const[ counter, setCounter ] = useState(initial);

    const Add = () => {
        if( counter < stock ) {
            setCounter( counter + 1 );
        };
    };

    const Decreace = () => {
        if ( counter > 1 ) {
            setCounter(counter -1);
        };
    };

    return (


        <div>
            <div className="containerCount">
                 <div className="counter">
                    <div>
                        <label >Stock disponible : {stock}</label>
                    </div>   
                    <div>
                        <button className="buttonCounter" onClick={Decreace}>-</button>
                        <input  className="inputCounter" disabled value={counter}/> 
                        <button className="buttonCounter" onClick={Add}>+</button> 
                    </div>   
                </div>  
                <div>  
                    <button className="buttonCarrito" type="button" onClick={() => onAdd(counter)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
         
    );
}
export default ItemCount









