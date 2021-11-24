import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getFirestore } from "../firebase/index";




export const ItemDetailContainer = () => {

      const { productoID } = useParams();
      const [item, setItem] = useState(null);

 
    useEffect(() => {
    
      const db = getFirestore();
      
        const theItem = doc(db, 'items', productoID);
        getDoc(theItem).then((snapshot) => {
          if (snapshot.exists()) {

            console.log(snapshot.data());
            setItem(snapshot.data());
          }
        });
      
    }, [productoID]);


    
  
    return (
      <>
          
       <main>
        {item ? <ItemDetail item={item} key={item} /> : "Loading..."}
      </main>
        
        
      </>
    );
  };