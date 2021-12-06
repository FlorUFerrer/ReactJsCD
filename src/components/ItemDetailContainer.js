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
        ((snapshot)=>{
            //console.log(snapshot.docs)
            // setItem(snapshot.docs.map((doc)=>
            //      doc.data()
            //   //  console.log(doc.data())
            // ))})
      //  setItem(snapshot.docs.filter(doc => doc.data().id == id))})
  let item = snapshot.docs.filter(doc => doc.data().id == id)
  console.log(item.data)
})
    }, [id]);
        
    
      
  return (
        <div >
            <div>
                          

              { item ? <ItemDetail item={item} key={item.id}/>: "loading"} 
            
            </div>
        </div>
    );
}

export default ItemDetailContainer;