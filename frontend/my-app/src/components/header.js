import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiCode, FiX, FiMenu } from "react-icons/fi"
import './header.css'
import { CgProfile } from "react-icons/cg";

function Header({user, isLogin}) {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const cartItems = localStorage.getItem('cartItems');
    const arrayCartItem = JSON.parse(cartItems);
    const navigate = useNavigate();
    const handleSubmitCart = () => {
        navigate('/cart')
    }
    const handleSubmitLogin = () => {
        navigate('/login')
    }
    const handleSubmitShop = () => {
        navigate('/shop')
    }
    const handleSubmitProfile = () => {
        navigate('/profile')
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
                            <Link to = '/cart' onSubmit={handleSubmitCart}>Cart<div className="header-cart-count">{arrayCartItem !== null ? ((arrayCartItem.length) ): (<p>0</p>)}</div></Link>
                        </li> 
                        <li className="menu-link" onClick={closeMobileMenu}>
                            {isLogin ? (
                                <Link to = '/profile' className="header-profile" onSubmit={handleSubmitProfile}><CgProfile />{user.user.firstname}</Link>
                            ) : (
                                <Link to = '/login' onSubmit={handleSubmitLogin}>Login/Register</Link>
                            )
                        }
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

export default Header