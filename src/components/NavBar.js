//Inicia con : npm start (en la terminal)

import CartWidget from './CartWidget'
import './styles/NavBar.css'


function NavBar() {
     return(
           <div>
                <nav className="NavBar">
                    <ul className="navBarLista">
                        <li className="navBarItems">Inicio</li> 
                        <li className="navBarItems">Productos</li> 
                        <li className="navBarItems">Nosotros</li> 
                        <CartWidget/>
                    </ul>
                </nav>
            </div>
    )
}

 export default NavBar 