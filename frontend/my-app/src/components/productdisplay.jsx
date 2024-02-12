import React, { useState } from "react";
import './productdisplay.css'
import { useNavigate } from "react-router-dom";

function ProductDisplay(props) {
    const navigate = useNavigate();
    const imgUrl = process.env.REACT_APP_BACKEND_IP;
    const {product} = props;
    const [cartItems, setCartItems] = useState([]);
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    }
    const handleSubmitCart = () => {
        navigate('/cart')
    }
    return(
        <div className="productdisplay-con">
            <div className="productdisplay-left">
                <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={`http://${imgUrl}/api/admin/images/${product.productImg}`} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.productName}</h1>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">
                        ${product.productOldPrice}
                    </div>
                    <div className="productdisplay-right-prices-new">
                        ${product.productNewPrice}
                    </div>
                </div>
                <div className="productdisplay-right-desc">
                        {product.productDesc}
                </div>
                <div className="productdisplay-right-available">
                     Available : {product.productCount}
                </div>
                <button onClick={()=>{handleAddToCart(product)}}>ADD TO CART</button>
                <button onClick={handleSubmitCart}>GO TO CART</button>
            </div>
        </div>
    )
}

export default ProductDisplay;