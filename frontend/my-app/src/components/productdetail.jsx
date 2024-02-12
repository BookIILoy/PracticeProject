import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "./shopcontext";
import { useParams } from "react-router-dom";
import ProductDisplay from "./productdisplay";
import Header from "./header";
import Item from "./product";
import './shopitem.css'

function Product() {
    const imgUrl = process.env.REACT_APP_BACKEND_IP;
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

    const {dataProduct, isFetch} = useContext(ShopContext);
    const {productId} = useParams();
    const  product = dataProduct.find((e) => e.productId === Number(productId));
    if(isFetch){
        return(
            <div className="productdetail-con">
                <Header user={user} isLogin={isLogin}/>
                <ProductDisplay product={product} />
                <hr />
                <div className="shopitem-product">
                {dataProduct.map((item,id) => (
                    <Item key = {id} id={item.productId} name = {item.productName} image = {`http://${imgUrl}/api/admin/images/${item.productImg}`} new_price = {item.productNewPrice} old_price = {item.productOldPrice} />
                ))}
            </div>
            </div>
        )
    }
    else{
        return <div><h1>Loading...</h1></div>
    }
}
export default Product;