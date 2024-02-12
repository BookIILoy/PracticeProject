import React, { useContext } from "react";
import { ShopContext } from "./shopcontext";
import Item from "./product";
import './shopitem.css'

function ShopItem() {

    const {dataProduct} = useContext(ShopContext); //use function in ShopContext.jsx
    const imgUrl = process.env.REACT_APP_BACKEND_IP;

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

export default ShopItem;