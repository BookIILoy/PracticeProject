import React, { useState, useEffect } from "react";
import Header from "./header";
import Item from "./product";
import { useLocation, useNavigate } from "react-router-dom";

function Cart(){
    const navigate = useNavigate();
    const location = useLocation();
    const isCart = false;
    const [user, setUser] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
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
    if(isCart){
        const product = location.state.cartItems;
        return (
            <>
                <Header user={user} isLogin={isLogin}/>
                <h1>Cart</h1>
                <div className="cart-con">
                    { product.map((item, id) => (
                        <Item key = {id} id={item.productId} name = {item.productName} image = {`http://${imgUrl}/api/admin/images/${item.productImg}`} new_price = {item.productNewPrice} old_price = {item.productOldPrice} />
                    ))
                    }
                </div>
            </>
    )
    }else {
        return <h1>Loading...</h1>
    }
} 
export default Cart