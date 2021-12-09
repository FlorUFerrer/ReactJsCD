import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {  getDocs} from "firebase/firestore";
import { getFirestore } from "../firebase/index";
import { collection} from "@firebase/firestore";
import ItemList from "./ItemList";
import './styles/loading.css'




  
export  const ItemListContainer = () =>{
    const { categoryId } = useParams()
    const [product,setProduct] = useState()
    

    useEffect(() =>{
        const db = getFirestore()
        getDocs(collection(db,"items")).then
        ((snapshot)=> setProduct(snapshot.docs.map((doc)=> doc.data())))
    }, []);
    

  
    return(
      <>

          <div >
              

              <ItemList productos={product} category={categoryId}/>
          
          </div>
      </>
  )

}

export default ItemListContainer;



    

  

