import './styles/CartWidget.css'
import imagenCarrito from './img/carritoCompras.png';


const CartWidget = () => {
     return(
        <div> 
            
            <img className="imagenCarrito" src={imagenCarrito} alt="carrito" /> 
            
        </div> 
    )
}

 export default CartWidget 