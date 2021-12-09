import React, { useState, useContext } from 'react'
import CartContext from '../context/CartContext';
import '@firebase/firestore';
import { getFirestore } from '../firebase';
import { doc,collection, addDoc, updateDoc,getDocs} from "firebase/firestore";
import "./styles/finalOrden.css"

export const FinalOrden = () => {

    const { cache, cartTotalAmount ,clear} = useContext(CartContext);
    const [enviar, setEnviar]= useState(false)
    const [click , setClick] = useState(false)

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
        let orderCollection = getDocs(collection(db,"orders")); 
          const newOrder = {
              buyer: buyer,
              items: cache,
              total: cartTotalAmount
          };

          addDoc(orderCollection, newOrder).then(({id})=>{ setClick(id) ;})
          clear()
          setEnviar(true)
          document.getElementById("form").reset();
    }

    return (
        <div >
            <form id="form" className='orden' onSubmit={e=> e.preventDefault()}>
                <div  >
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
                <button className='enviar' type="submit" onClick={() => onClickHandler()}>Enviar</button>
            </form>
        </div>
    )
}

export default FinalOrden;
