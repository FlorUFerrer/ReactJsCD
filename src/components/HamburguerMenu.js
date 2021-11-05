

import HamburguerNav from './HamburguesaNav'
import './styles/NavBar.css'




export const Hamburguer = () => {



    return(
<>
        <div className="hamburguerMenu" >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
  <HamburguerNav />
  </>
    )    
}

export default Hamburguer