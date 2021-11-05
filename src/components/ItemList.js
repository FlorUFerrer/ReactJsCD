import React from 'react';
import { Item } from './Item';
import "./styles/itemList.css";
import "./styles/loading.css";



export const ItemList = ({ productos }) => {

    return (
        <div >

            { productos.loading && <p className="loading">"Espere unos segundos..."</p> }  

            {
                productos.data.map(product => (
                  <div className="containerItemList">
                        <Item
                             id ={product.id}
                            img = { product.img}
                            name = { product.name }
                            price = { product.price }
                            />

                       
                </div>
                ))
            }
        </div>
    );

}

export default ItemList
