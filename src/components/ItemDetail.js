import React from 'react'
import Counter from './ItemCount';
import "./styles/itemDetail.css";
import "./styles/loading.css";


export const ItemDetail = ({ item }) => {

   

    return (
        <div >
            <div >
                
                { item.loading && <p className="loading"></p> }

                { !item.loading &&
                    <div className="containerItemDetail">
                        <div className="itemDetail" >
                            <img className= "imgContainer" src= {item.data.img} alt={item.data.name} />
                            <div>
                               <h5 >{ item.data.name }</h5>
                                <p >{ item.data.description }</p>
                                <p >$ { item.data.price }</p>
                                <Counter className="counter" sinStock="0" stock ={item.data.stock} />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
