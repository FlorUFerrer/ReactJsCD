import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { productList } from '../data/productList';
import { ItemDetail } from './ItemDetail';

const productListPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(productList);
    }, 2000);
});

export const ItemDetailContainer = () => {

    const { id } = useParams();

    const[item, setItem] = useState({
        data: {},
        loading: true
    });

    useEffect( () => {
        productListPromise.then( data => {              
            setItem({
                data: data.find( product => product.id === parseInt(id) ),
                loading: false
            });   
        });  
    }, [id]);

    return (
        <div >
            <div >
                <h1>Item Detail Container</h1>
                <ItemDetail item = { item } />
            </div>
        </div>
    );
}