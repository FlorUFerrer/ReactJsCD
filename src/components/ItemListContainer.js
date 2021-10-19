import "./styles/itemListContainer.css"
import monitor from './img/monitor.jpeg'
import Counter from './ItemCount';
const ItemListContainer = () =>{

    return(
       <div className="listProducts">
           <div className="listImg">
                <img  src ={monitor} alt ="monitor"/>
                
           </div>
           
           <div className="listCompra"> 
                <p>###PRECIO###</p>
                <Counter stock ="10" sinStock ="0"/>      
             <button className= "listButton">COMPRAR</button>
            </div>
       </div>
    )
}
 export default ItemListContainer