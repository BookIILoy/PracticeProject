import React, { useState, useEffect } from "react";
import Header from "./header";

function Cart(){
    const [user, setUser] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:5000/api/users/auth", requestOptions)
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
        .catch(error => console.log('error', error));
    },[])

    return (
        <>
            <Header user={user} isLogin={isLogin}/>
            <h1>Cart</h1>
        </>
    )
}

export default Cart