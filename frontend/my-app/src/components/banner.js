import './banner.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

let bannerData = {
    "title" : "GStore Online Shopping",
    "desc" : "GStore is online shopping website in Thailand. We have every popular products in this time."
}

function Banner() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/about')
    }

    return(
        <>
            <div className="banner-bg">
                <div className="container">
                    <div className="banner-con">
                        <div className="banner-text">
                            <h1>{bannerData.title}</h1>
                            <p>
                                {bannerData.desc}
                            </p>
                            <Link to = "/about" className="banner-btn" onSubmit={handleSubmit}>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner