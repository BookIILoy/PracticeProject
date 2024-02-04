import React from "react";
import './productline.css'
import { Link, useNavigate } from "react-router-dom";

function ProductLine () {
    const navigate = useNavigate();
    const handleSubmitKeyboard = () => {
        navigate("/")
    }
    const handleSubmitFurniture = () => {
        navigate("/")
    }
    const handleSubmitItStore = () => {
        navigate("/")
    }
    return (
            <div className="container">
                <section className="productline-con">
                    <div className="productline-img-l">
                        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="productline-text">
                        <h2>IT Shop</h2>
                        <p>
                            Our IT products are cheapest in Thailand with full warranty.
                        </p>
                        <Link to = "/itshop" className="productline-btn" onClick={handleSubmitItStore}>Shop now</Link>
                    </div>
                </section>
                <section className="productline-con">
                    <div className="productline-text">
                        <h2>Keyboard</h2>
                        <p>
                            Our IT products are cheapest in Thailand with full warranty.
                        </p>
                        <Link to = "/keyboard" className="productline-btn" onClick={handleSubmitKeyboard}>shop now</Link>
                    </div>
                    <div className="productline-img-l">
                        <img src="https://images.unsplash.com/photo-1615869442320-fd02a129c77c?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </section>
                <section className="productline-con">
                    <div className="productline-img-l">
                        <img src="https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="productline-text">
                        <h2>Furniture</h2>
                        <p>
                            Our IT products are cheapest in Thailand with full warranty.
                        </p>
                        <Link to = "/furniture" className="productline-btn" onClick={handleSubmitFurniture}>shop now</Link>
                    </div>
                </section>
            </div>
        
    )
}

export default ProductLine