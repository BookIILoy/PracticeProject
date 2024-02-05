import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Header from "./header";

function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const MySwal = withReactContent(Swal);

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": username,
        "password": password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:5000/api/users/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.success === 1){
                MySwal.fire({
                    html : <i>{result.message}</i>,
                    icon : 'success'
                })
                localStorage.setItem('token', result.token)
                navigate('/')
            }else{
                MySwal.fire({
                    html : <i>{result.data}</i>,
                    icon : 'error'
                })
            }
        })
        .catch(error => console.log('error', error));
    }
    const handleSubmitRegister = () => {
        navigate("/register")
    }
    return (
        <>
        <Header />
        <div className="container">
            <div className="login-con">
                <div className="login-text">
                    <div className="login-info">
                        <h2>Login</h2>
                        <div className="login-input">
                            <input type="text"
                                className="login-input"
                                placeholder="email/username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="login-input">
                            <input type="password"
                                className="login-input"
                                placeholder="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="login-btn" onClick={handleSubmitLogin}>Login</button>
                        <p>
                        Dont't have an account?
                        </p>
                        <button type="submit" className="login-btn" onClick={handleSubmitRegister}>Register</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login