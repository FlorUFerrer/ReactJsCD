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

                     
            <div className="counter">
                <label >Stock Disponible: {stock}</label>
                <button className="buttonCounter" onClick={Decreace}>-</button>
                 {/* <button className= "buttonCount">{counter}</button>   */}
                  <input   disabled value={counter}/> 
                <button className="buttonCounter" onClick={Add}>+</button> 
                <button  type="button" onClick={() => onAdd(counter)}>Agregar al carrito</button>
            </div>
        
    
        </div>
      
                 
          
         
    );
}
export default ItemCount
/*
export const ItemCount = (props) => {

   

    const [counter,setCounter] = useState(props.sinStock);

    
    function Add(){
            if (counter < props.stock){
               setCounter(parseInt(counter)+1)
            }
   }

   function Decreace(){
             if (counter >= 1){
                setCounter(parseInt(counter)-1)
             }
    }


    return (
        <div>

                     
            <div className="counter">
                <button className="buttonCounter" onClick={Decreace}>-</button>
                <button className= "buttonCount">{counter}</button> 
                <button className="buttonCounter" onClick={Add}>+</button> 
            </div>
        
        </div>
    );
}



export default ItemCount



*/

