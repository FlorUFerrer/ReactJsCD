//Inicia con : npm start (en la terminal)

import Hamburguer from './HamburguerMenu';

import './styles/NavBar.css'


function NavBar() {
     return(
           <div>
               <header className="header">
                   <h1>LOGO</h1>
                    <nav className="navBar">
                            <Hamburguer/>
                    </nav>
                </header>
            </div>
    )
}

 export default NavBar 

 //FALTA TERMINAR EL MENUHAMBURGUESA