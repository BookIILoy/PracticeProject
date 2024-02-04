import React, { useEffect, useState } from "react";
import Banner from "./banner";
import ProductLine from "./productline";
import Header from "./header";

function Home () {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState([]);
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
    //console.log(user, isLogin)
        return (
            <>  
                <Header user={user} isLogin={isLogin}/>
                <Banner />
                <ProductLine />
            </>
        )
        
}

export default Home
