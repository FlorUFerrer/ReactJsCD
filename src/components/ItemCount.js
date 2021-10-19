 import React , { useState } from 'react';

 const Counter = (props) =>{

  const [counter,setCounter] = useState(props.sinStock);

    
    function Add(){
            if (counter < props.stock){
               setCounter(counter + 1)
            }
   }

   function Decreace(){
             if (counter >= 1){
                setCounter(counter - 1)
             }
    }

    return(
        <div>
            <button  onClick={Decreace}>-</button>
            <button>{counter}</button> 
            <button  onClick={Add}>+</button> 
        </div>
    )
}


 export default Counter;
