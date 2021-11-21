import React, { useState, useContext } from 'react'
import CartContext from '../context/CartContext';
import firebase from 'firebase/app';
import '@firebase/firestore';
import { getFirestore } from '../firebase';


export const FinalOrden = () => {

    const { cache, cartTotalAmount } = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (event) => {
        setBuyer({
            ...buyer,
            [event.target.name] : event.target.value
        })
    }

    const onClickHandler = () => {

        const db = getFirestore();
        const orders = db.collection('orders');
        const newOrder = {
            buyer: buyer,
            items: cache,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cartTotalAmount
        };

        orders.add(newOrder).then(({id}) => {
            alert(`El id de su compra es: ${id}`);
        }).catch(err => {
           alert("Ha ocurrido un error, su orden no se ha generado");
        })

    }

    return (
        <div >
            <form onSubmit={e=> e.preventDefault()}>
                <div >
                    <label htmlFor="name" >Nombre</label>
                    <input type="text"  id="name" aria-describedby="nameHelp" name="name" onChange={handleInputChange}/>
                </div>
                <div >
                    <label htmlFor="email" >Email</label>
                    <input type="email"  id="name" aria-describedby="emailHelp" name="email" onChange={handleInputChange}/>
                </div>
                <div >
                    <label htmlFor="phone" >Telefono</label>
                    <input type="text"  id="phone" aria-describedby="phoneHelp" name="phone" onChange={handleInputChange}/>
                </div>
                <button type="submit" onClick={() => onClickHandler()}>Enviar</button>
            </form>
        </div>
    )
}

export default FinalOrden;
