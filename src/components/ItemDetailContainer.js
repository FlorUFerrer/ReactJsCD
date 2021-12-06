import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { getFirestore } from "../firebase/index";

export const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState(null)


    useEffect( async() =>{
        const db = getFirestore(); 
        let snapshot = await getDocs(collection(db,"items")); 
        let filtrados = snapshot.docs.filter( doc => doc.data().id === id) 
        setItem(filtrados[0].data());  
    }, []);

  return (
        <div>
            <div>

              { item ? <ItemDetail item={item} key={item.id}/> : "loading" } 

            </div>
        </div>
    );
}

export default ItemDetailContainer;