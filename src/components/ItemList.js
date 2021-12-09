  

import React from 'react';
import { Item } from './Item';
import "./styles/itemList.css";
import "./styles/loading.css";
    
    
export const ItemList = ( { productos, category } ) =>{
    const products = productos
    const categoria = category
        
        const categorizar = products ? (categoria ? products.filter((items) => { return items.category_id === categoria }) : products) : products;
  
        return (
            <>
            <>  
            <div >
               {
               categorizar ? categorizar.map((producto) =>{
                    return <Item data={producto} key={producto.id} /> }) : "Loading..."}
            </div>
            
        </>

            </>
        );
    
    }
    
    export default ItemList;


   
