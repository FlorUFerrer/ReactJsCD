import './styles/itemList.css'
import Counter from './ItemCount';
import { NavLink } from 'react-router-dom';
 


export const Item = ({ id, name, price, img, stock}) => {

    return (
        <div className="containerCard" >
             <div className="card">
                
                <img className="sizeImg" src= {img} alt={name} />
                <h3>{name}</h3>
                <h3>${price}</h3>
                <Counter sinStock="0" stock ={stock} />
                <NavLink  key = { id } exact to={`/item/${id}`}>
                             <button className="details">DETALLES </button>
                </NavLink>
              </div>
           
        </div>
    );

}