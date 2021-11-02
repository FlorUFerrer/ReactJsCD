import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail';
import './styles/itemDetail.css'
const itemToDetail = {
        id: '1',
        name: 'Monitor Gamer ',
        description: 'Marca: Sentey  Tamaño: 27 pulgadas  Color: negro',
        price: 45000,
        img: "https://drive.google.com/uc?export=view&id=1Q9rVS3_s0MTey9J33yueWJL5zeRJtanI"     
}

const itemToDetailPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(itemToDetail);
    }, 2000);
});

export const ItemDetailContainer = () => {

    const[item, setItem] = useState({
        data: {},
        loading: true
    });

    useEffect( () => {
        itemToDetailPromise.then( data => {
            setItem({
                data: data,
                loading: false
            });
        });
    }, []);

    return (
        <div>
            <div className= "itemDetail">
                <h1>Detalle</h1>
                <ItemDetail item = { item } />
            </div>
        </div>
    );
}