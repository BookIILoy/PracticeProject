import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiCode, FiX, FiMenu } from "react-icons/fi"
import './header.css'

function LoginHeader() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const navigate = useNavigate();
    const handleSubmitCart = () => {
        navigate('/cart')
    }
    const handleSubmitLogin = () => {
        navigate('/')
    }
    const handleSubmitShop = () => {
        navigate('/shop')
    }
    return(
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <Link to ='/'>GStore <FiCode /></Link>
                    </div>
                    <ul className= {click ? "menu active" : "menu" }>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <Link to = '/Shop' onSubmit={handleSubmitShop}>Shop</Link>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <Link to = '/cart' onSubmit={handleSubmitCart}>Cart</Link>
                        </li> 
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <Link to = '/' onSubmit={handleSubmitLogin}></Link>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginHeader