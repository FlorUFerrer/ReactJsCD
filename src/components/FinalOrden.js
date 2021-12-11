import React, { useState, useContext } from 'react'
import CartContext from '../context/CartContext';
import '@firebase/firestore';
import { getFirestore } from '../firebase';
import {collection, addDoc} from "firebase/firestore";

import "./styles/finalOrden.css"
import BuyerForm from './Form';

export const FinalOrden = () => {

    const { cache, cartTotalAmount } = useContext(CartContext);
    const [orderNumber, setOrderNumber] = useState(null);
  
    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const date= new Date();
    const orderDate =date.toLocaleDateString();

    
    const db = getFirestore();
    const orders = collection(db, "orders");
    
    const handleSubmit = async (e) =>{
        try {
            e.preventDefault();
            
            const newOrder ={
            buyer: buyer,
            items: cache,
            date: orderDate,
            total: cartTotalAmount
            }
            addDoc(orders, newOrder).then(({ id }) => {
                setOrderNumber(id);
              });
            console.log(newOrder)
            alert("Se agrego el producto exitosamente!")
        } catch (err) {
            console.error(err);
        }
    }


  return (
     <div >
             

         <form  id="form" className='orden' onSubmit = {handleSubmit}>
        <label>Ingrese NOMBRE</label>
             <BuyerForm setBuyer={setBuyer} name ='name' buyer={buyer}/>
        <label>Ingrese E-mail</label>
             <BuyerForm setBuyer={setBuyer} name ='email' buyer={buyer}/>
        <label>Ingrese Telefono</label>
             <BuyerForm setBuyer={setBuyer} name ='phone' buyer={buyer}/>
             <button className='enviar' type='submit'>
                 FINALIZAR COMPRA
             </button>
         </form>
           
       </div>
     )
}

export default FinalOrden;
