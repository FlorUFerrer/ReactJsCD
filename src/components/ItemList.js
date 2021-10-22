import './styles/itemList.css'
import Counter from './ItemCount';
 

const ItemList = ({ product }) => {
  return (
   
        <div className="card">
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <span>${product.price}</span>
            <Counter sinStock="0" stock ={product.stock} />
        </div>
    
  );
};

export default ItemList;


