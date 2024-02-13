import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './cartitems.css'

function CartItems(props) {
    const [cartItems, setCartItems] = useState([]);

    // Fetch cart items from localStorage when component mounts
    useEffect(() => {
        const storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
         setCartItems(JSON.parse(storedItems));
         }
    }, []);

    const handleRemove = (id) => {
        setCartItems((cartItems) =>
        cartItems.filter((item) => item.productId !== id)
    );
    // Optionally update localStorage to reflect the change
        localStorage.setItem('cartItems', JSON.stringify(cartItems.filter((item) => item.productId !== id)));
        window.location.reload(true)
    };

    return(
        <div className="cartitems-con">
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className="cartitems-prices">
                <div className="cartitems-prices-new">
                    {props.new_price} USD
                </div>
            </div>
            <div className="cartitems-totalprice">
                Total Price : {props.totalPrice} USD
            </div>
            <div className="cartitems-remove">
                <button type="submit" onClick={() => {handleRemove(props.id)}}>remove</button>
            </div>
        </div>
    )
}

export default CartItems;