import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Header from "./header";
import './register.css'

function Register() {
    const navigate = useNavigate();
    const [phoneNum, setPhoneNum] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [birth, setBirth] = useState('');
    const MySwal = withReactContent(Swal);
    const handleSubmitRegister = (e) => {
            //use to check that is user miss some inputs if user missing only one input or more it will error and not try to fetch.
            if( phoneNum && firstName && lastName && email && password && rePassword && birth !== ''){
                e.preventDefault();
                console.log(password, firstName, phoneNum, email, birth, rePassword)
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                "email": email
                });
        
                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };
        
                fetch("http://localhost:5000/api/users/email", requestOptions) //fetch to check that email that user use is a same one in database or not
                .then(response => response.json())
                .then(result => {
                    if(result.success === 0){ //if it not it will return success = 0 and fetch next api
                        var myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");

                        var raw = JSON.stringify({
                        "phoneNum": phoneNum
                        });

                        var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                        };

                        fetch(`http://${process.env.REACT_APP_BACKEND_IP}/api/users/phone`, requestOptions) //to check phone that user use is a same one in database or not
                        .then(response => response.json())
                        .then(result => {
                            if(result.success === 0){ // if not will create user
                                if(password === rePassword){ //check password is equal to repassword
                                    var myHeaders = new Headers();
                                    myHeaders.append("Content-Type", "application/json");
                            
                                    var raw = JSON.stringify({
                                    "firstName": firstName,
                                    "lastName": lastName,
                                    "password": password,
                                    "phoneNum": phoneNum,
                                    "email":email,
                                    "birth": birth
                                    });
                            
                                    var requestOptions = {
                                    method: 'POST',
                                    headers: myHeaders,
                                    body: raw,
                                    redirect: 'follow'
                                    };
                            
                                    fetch(`http://${process.env.REACT_APP_BACKEND_IP}/api/users`, requestOptions)
                                    .then(response => response.json())
                                    .then(result => {
                                        if(result.success === 1){
                                            MySwal.fire({
                                                html: <i>Resister Successfully.</i>,
                                                icon: 'success'
                                            })
                                            navigate('/login')
                                        }
                                    })
                                    .catch(error => console.log('error', error));
                                } else{
                                    MySwal.fire({
                                        html : <i>Password Not Match.</i>,
                                        icon : 'error'
                                    })
                                }
                            } else {
                                MySwal.fire({
                                    html: <i>{result.data}</i>,
                                    icon : 'error'
                                })
                            }
                        })
                    .catch(error => console.log('error', error));
               }
                    else {
                        MySwal.fire({
                            html: <i>Email is already used.</i>,
                            icon: 'error'
                        })
                    }  
                })
                .catch(error => console.log('error', error));
            } else {
                MySwal.fire({
                    html: <i>Informations are missing.</i>,
                    icon: 'error'
                    })
                }
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="register-con">
                    <div className="register-text">
                        <h2>Register</h2>
                        <div className="register-input">
                            <input type="text"
                                className="register-input"
                                placeholder="Firstname"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="register-input">
                            <input type="text"
                                className="register-input"
                                placeholder="Lastname"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="register-input">
                            <input type="text"
                                className="register-input"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="register-input">
                            <input type="number"
                                className="register-input"
                                placeholder="Phone Number"
                                required
                                value={phoneNum}
                                onChange={(e) => setPhoneNum(e.target.value)} />
                        </div>
                        <div className="register-input">
                            <input type="password"
                                className="register-input"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="register-input">
                            <input type="password"
                                className="register-input"
                                placeholder="Re-Password"
                                required
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)} />
                        </div>
                        <div className="register-input">
                            <input type="text"
                                className="register-input"
                                placeholder="YYYY-MM-DD"
                                required
                                value={birth}
                                onChange={(e) => setBirth(e.target.value)} />
                        </div>
                        <button type="submit" className="register-btn" onClick={handleSubmitRegister}>Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;