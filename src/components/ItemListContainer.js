import "./styles/itemListContainer.css"
import React, { useEffect,useState } from 'react';
import Products from "./products.json";
import ItemList from "./ItemList";

     const ItemListContainer = () => {
          const [productos, setProductos] = useState([]);
        
          const getData = (data) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                if (data) {
                  resolve(data);
                } else {
                  reject("Nada por aquí");
                }
              }, 2000);
            });
        
          useEffect(() => {
            getData(Products)
              .then((res) => setProductos(res))
              .catch((err) => console.log("Aqui pasa algo: " ,err));
          }, []);
        
          return (
            <>
              {productos.length
                ? productos.map((producto) => (
                    <ItemList product={producto} key={producto.id} />
                  ))
                : "Espere unos segundos..."} 
                {/* No sé como darle estilo al "espere unos segundos" */}
            </>
          );
        };

 export default ItemListContainer