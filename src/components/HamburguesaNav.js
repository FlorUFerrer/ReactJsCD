import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'
import './styles/NavBar.css'


const HamburguerNav  =({open}) => {

        return(

            <ul className="navBarLista" open={open}>
                                <li className="navBarItems"><NavLink  exact to={"/"}>Inicio</NavLink></li>
                                <li className="navBarItems"><NavLink  exact to={"/category/MATE"}>Mates</NavLink></li>
                                <li className="navBarItems"><NavLink  exact to={"/category/MACETA"}>Macetas</NavLink></li>
                                <li className="navBarItems"><NavLink  exact to={"/category/FIGURA"}>Figuras de Acción</NavLink></li>
                                <CartWidget />
                            </ul>
        )    
}


export default HamburguerNav 