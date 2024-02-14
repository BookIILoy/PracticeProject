import React, { useState, useEffect  } from "react";
import { useLocation } from "react-router-dom";
import './payment.css'
import Header from "./header";

function Payment() {
    const location = useLocation();
    const [user, setUser] = useState([]);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address, setAddress] = useState();
    const [province, setProvince] = useState();
    const [zipCode, setZipCode] = useState();
    const [email, setEmail] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const cartItems = location.state.arrayCartItem;
    const totalPrice = location.state.totalPrice;
    console.log(cartItems, totalPrice);
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

    if(!isLogin){
        return (
            <>
            <Header user={user} isLogin={isLogin}/>
            <div className="payment-con">
                <div className="payment-text">
                    <h1>Payment</h1>
                    { cartItems.map((item) => (
                        <div className="payment-product">
                            <p>Product Name : </p> <span>{item.productName}</span>
                            <p>Price : </p> <span>{item.productNewPrice} USD</span>
                        </div>
                    )
                    )}
                    <div className="payment-price">
                        <p>Total Price :</p> <span>{totalPrice}  USD</span>
                    </div>
                    <div className="payment-input">
                        <p>Firstname</p>
                        <p>Lastname</p>
                        <input type="text" required placeholder="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" required placeholder="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="payment-input-add">
                        <p>Address</p>
                        <input type="text" required placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <p>Email</p>
                        <input type="text" required placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="payment-input">
                        <p>Province</p>
                        <p>Zipcode</p>
                        <input type="text" required placeholder="province" value={province} onChange={(e) => setProvince(e.target.value)} />
                        <input type="text" required placeholder="zipcode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                    </div>
                    <div className="payment-input-payment">
                        <p>Payment Method : </p> <span>COD (Cash on Delivery)</span>
                    </div>
                </div>
            </div>
            </>
            
        )
    }
    if(isLogin){
        return (
            <>
            <Header user={user} isLogin={isLogin}/>
            <div className="payment-con">
                <div className="payment-text">
                    <h1>Payment</h1>
                    { cartItems.map((item) => (
                        <div className="payment-product">
                            <p>Product Name : </p> <span>{item.productName}</span>
                            <p>Price : </p> <span>{item.productNewPrice} USD</span>
                        </div>
                    )
                    )}
                    <div className="payment-price">
                        <p>Total Price :</p> <span>{totalPrice}  USD</span>
                    </div>
                    <div className="payment-input">
                        <p>Firstname</p>
                        <p>Lastname</p>
                        <input type="text" required placeholder="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" required placeholder="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="payment-input-add">
                        <p>Address</p>
                        <input type="text" required placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="payment-input">
                        <p>Province</p>
                        <p>Zipcode</p>
                        <input type="text" required placeholder="firstname" value={province} onChange={(e) => setProvince(e.target.value)} />
                        <input type="text" required placeholder="lastname" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                    </div>
                    <div className="payment-input-payment">
                        <p>Payment Method : </p> <span>COD (Cash on Delivery)</span>
                    </div>
                </div>
            </div>
            </>
            
        )
    }
}

export default Payment;