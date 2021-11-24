import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import {  getDocs, query} from "firebase/firestore";
import { getFirestore } from "../firebase/index";
import { collection} from "@firebase/firestore";
import { NavLink } from 'react-router-dom';

import './styles/loading.css'




export const ItemListContainer = () => {

  const {category} = useParams();
  const [products, setProducts] = useState(null);


  useEffect(() => {
  
    const db = getFirestore();
    
    const q = query(collection(db, "items"))
     
    getDocs(q).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          const newDoc = { ...doc.data(), id: doc.id };
          return newDoc;
        })
      );
    });
  }, []);
  
  
  
  




  return (
          
    <div>
    
   
    { products &&
      products.map((product) => (
         <div key={product.id} className="containerCard" >
              <div className="card">
                 <img className="sizeImg" src= {product.img} alt={product.name} />
                 <h3>{product.name}</h3>
                 <h3>${product.price}</h3>
                               
                <NavLink  to={`/producto/${product.id}`}><button className="details">DETALLES </button></NavLink>
                        
             </div>
           
             {/* <ItemList product ={product}  key={product.id}/> */}
       </div>
      ))}
  </div>
       
  );
  
}

export default ItemListContainer;