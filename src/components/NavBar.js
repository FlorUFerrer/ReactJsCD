//Inicia con : npm start (en la terminal)

import './NavBar.css'

function NavBar() {
     return(
           
           <nav className="NavBar">
                <ul className="navBarLista">
                       <li className="navBarItems">Inicio</li> 
                       <li className="navBarItems">Productos</li> 
                       <li className="navBarItems">Nosotros</li> 
                </ul>
            </nav>
    )
}

 export default NavBar 