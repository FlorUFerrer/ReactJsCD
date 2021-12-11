//Inicia con : npm start (en la terminal)


import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'

import './styles/NavBar.css'


function NavBar() {
     return(
           <div>
               <header className="header">
                   <h1>LOGO</h1>
                    <nav className="navBar">
                    <ul className="navBarLista">
                    <li className="navBarItems"><NavLink  exact to={"/"}>Inicio</NavLink></li>
                            <li className="navBarItems"><NavLink  exact to={"/category/MATE"}>Mates</NavLink></li>
                            <li className="navBarItems"><NavLink  exact to={"/category/MACETA"}>Macetas</NavLink></li>
                            <li className="navBarItems"><NavLink  exact to={"/category/FIGURA"}>Figuras de Acción</NavLink></li>
                            <CartWidget />
                        </ul>
                    </nav>
                </header>
            </div>
    )
}

 export default NavBar 

 //FALTA TERMINAR EL MENUHAMBURGUESA