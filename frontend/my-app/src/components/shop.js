import React, { useState, useEffect} from "react";
import Header from "./header";
import './shop.css'
import { useNavigate } from "react-router-dom";
import ShopItem from "./shopitem";

function Shop() {
    const navigate = useNavigate();
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

    return(
        <>
            <Header user={user} isLogin={isLogin}/>
            <div className="shop-con">
                <ShopItem /> {/*call ShopItem function to show all product. */}
            </div>
        </>
    )
}

export default Shop;