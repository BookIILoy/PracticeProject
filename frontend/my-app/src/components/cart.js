import React, { useState, useEffect } from "react";
import Header from "./header";
import Item from "./product";
import { useNavigate } from "react-router-dom";

function Cart(){
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const cartItems = localStorage.getItem('cartItems');
    const arrayCartItem = JSON.parse(cartItems);
    console.log(arrayCartItem)
    const imgUrl = process.env.REACT_APP_BACKEND_IP;
    useEffect(() => {
        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`http://${process.env.REACT_APP_BACKEND_IP}/api/users/auth`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.success === 1){
                setIsLogin(true);
                setUser(result)
            }
            else{
                console.log(result)
            }
        })
        .catch(error => console.log(error));
    },[])
    const handleSubmitShop = () => {
        navigate('/shop');
    }
        return (
            <>
                <Header user={user} isLogin={isLogin}/>
                <h1>Cart</h1>
                <div className="cart-con">
                    { arrayCartItem !== null ? arrayCartItem.map((item, id) => (
                            <Item key = {id} id={item.productId} name = {item.productName} image = {`http://${imgUrl}/api/admin/images/${item.productImg}`} new_price = {item.productNewPrice} old_price = {item.productOldPrice} />
                        )) : (
                            <div className="cart-text">
                                <h1>Your Cart is Empty.</h1>
                                <button onClick={handleSubmitShop}>Our Shop</button>
                            </div>
                        )
                    }
                </div>
            </>
    )
} 
export default Cart