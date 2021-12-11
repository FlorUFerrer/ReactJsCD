import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { getFirestore } from "../firebase/index";

export const ItemDetailContainer = () => {

    const {id} = useParams()
   
    const [item, setItem] = useState(null)


    

    useEffect(() =>{
        const db = getFirestore()
        getDocs(collection(db,"items")).then
        ((snapshot)=> setItem(snapshot.docs.map((doc)=> doc.data())))

       
    }, []);
  
    

  return (
        <div>
            <div>
                <p>ITEM DETAIL</p>
               
                  { item ? <ItemDetail item={item[id]} key={id}/> : "loading" }    
                
               
            </div>
           
        </div>
    );
}

export default ItemDetailContainer;