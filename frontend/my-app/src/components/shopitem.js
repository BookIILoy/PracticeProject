import React, { useEffect, useState } from "react";
import Item from "./product";
import './shopitem.css'

function ShopItem() {
    const [dataProduct, setDataProduct] = useState([]);
    const [isFetch, setIsFetch] = useState(false);
    const imgUrl = process.env.REACT_APP_BACKEND_IP;
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`http://${process.env.REACT_APP_BACKEND_IP}/api/admin/product`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setDataProduct(result.data);
                setIsFetch(!isFetch);
            })
            .catch(error => console.log('error', error));
    },[])
    if(isFetch){
    return(
        <div className="shopitem-con">
        <h1>Our Product</h1>
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
        return <h1>...Loading</h1>
    }
}

export default ShopItem;