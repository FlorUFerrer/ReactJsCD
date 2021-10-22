import "./styles/ItemCount.css"
import React , { useState } from 'react';




 const Counter = (props) =>{

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

    return(
        <div className="counter">
            <button className="buttonCounter" onClick={Decreace}>-</button>
            <button className= "buttonCount">{counter}</button> 
            <button className="buttonCounter" onClick={Add}>+</button> 
        </div>
    )
}


 export default Counter;
