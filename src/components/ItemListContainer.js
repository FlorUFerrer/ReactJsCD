import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList';
import { productList } from '../data/productList';
import { useParams } from 'react-router-dom';


const productListPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(productList);
    }, 2000);
});

export const ItemListContainer = () => {
    
    const { category } = useParams();

    const [productos, setProductos] = useState({
        data: [],
        loading: true
    });
    
    useEffect( () => {

        productListPromise.then( data => {
            if( category === undefined ) {
                setProductos({
                    data: data,
                    loading: false
                })
            } else {
                setProductos({
                    data: data.filter( product => product.category === category ),
                    loading: false
                });
            }
        });
    }, [category]);

    return (
        <div >
            
            <ItemList productos = { productos } />
        </div>
    );
    
}


  export default ItemListContainer