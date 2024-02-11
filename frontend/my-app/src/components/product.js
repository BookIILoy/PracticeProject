import React from "react";
import './product.css'

function Item(props) {
    return(
        <div className="product-con">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="product-prices">
                <div className="product-prices-new">
                    {props.new_price} USD
                </div>
                <div className="product-prices-old">
                    {props.old_price} USD
                </div>
            </div>
        </div>
    )
}

export default Item;