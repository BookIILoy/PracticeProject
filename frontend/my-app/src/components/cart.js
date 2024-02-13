import React, { useState, useEffect } from "react";
import Header from "./header";
import CartItems from "./cartitems";
import { useNavigate } from "react-router-dom";
import './cart.css'

function Cart(){
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const cartItems = localStorage.getItem('cartItems');
    const arrayCartItem = JSON.parse(cartItems);
    const imgUrl = process.env.REACT_APP_BACKEND_IP;
    const calculateTotalPrice = (item) => {
        const totalPrice = item.reduce((sum, item) => sum + item.productNewPrice, 0);
        return totalPrice;
    }
    
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
                <div className="cart-con">
                    <h1>Cart</h1>
                    { arrayCartItem.length !== 0 ? 
                    arrayCartItem?.map((item, id) => (
                            <CartItems key = {id} id={item.productId} name = {item.productName} image = {`http://${imgUrl}/api/admin/images/${item.productImg}`} new_price = {item.productNewPrice} totalPrice = {calculateTotalPrice(arrayCartItem)} />
                        )) 
                        : (
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