import React, {useState} from 'react';
import CartContext from '../context/CartContext';

export default function CacheProvider({ defaultValue = [] , children }) {

    const [ cache, setCache ] = useState( defaultValue );
    const [ cartTotalAmount, setCartTotalAmount] = useState(0);
    
    function getFromCart(id){
        return cache.find(x => x.item.id === id);
    }
    
    function isInCart({id}){
        return id === undefined ? undefined : getFromCart(id) !== undefined;
    }
    
    function discountAmount(id){
        var unitPrice = cache.filter(x => x.item.id === id);
        var amountToDiscount = unitPrice[0].item.price * unitPrice[0].amount;
        setCartTotalAmount(cartTotalAmount - amountToDiscount);
    }

    function addItem(obj) {
        if(isInCart(obj.item)){
            cache.map(x => increaseQuantity(x, obj));
            var amountToIncreaseInMatch = obj.amount * obj.item.price;
            setCartTotalAmount(cartTotalAmount + amountToIncreaseInMatch);
            return;
        }
        var amountToIncrease = obj.item.price * obj.amount;
        setCache([...cache, obj]);
        setCartTotalAmount(cartTotalAmount + amountToIncrease);
    }
    
    function removeItem(id){
        discountAmount(id);
        var newCache = cache.filter(x => x.item.id !== id)
        setCache( newCache );
    }
    
    function clear(){
        setCache(defaultValue);
    }

    function increaseQuantity( x, obj ){
        if( x.item.id === obj.item.id ){
            x.amount = x.amount + obj.amount;
        }
    }
    
    return(
        <CartContext.Provider
            value = {{ cache, addItem, clear, removeItem, cacheSize: cache.length, cartTotalAmount }}
        >
            { children }
        </CartContext.Provider>
    );

}