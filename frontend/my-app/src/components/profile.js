import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import './profile.css'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Profile() {
    const [isLogin, setIsLogin] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [user, setUser] = useState();
    const [userInfo, setUserInfo] = useState();
    const [getUser, setGetUser] = useState(false);
    const [editFirstname, setEditFirstname] = useState(false);
    const [editLastname, setEditLastname] = useState(false);
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const handleSubmitFirstname = () => {
        setEditFirstname(!editFirstname)
    }

    const handleSubmitLastname = () => {
        setEditLastname(!editLastname);
    }

    const handleSaveFirstname = () => {
        if(firstname === '') {
        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        var raw = JSON.stringify({
        "firstName": userInfo.firstName,
        "lastName": userInfo.lastName,
        "email": userInfo.userEmail,
        "phoneNum": userInfo.userPhoneNum,
        "id": userInfo.userId
        });

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:5000/api/users", requestOptions)
        .then(response => response.json())
        .then(result => {
            setIsUpdate(!isUpdate);
        })
        .catch(error => console.log('error', error));
        } else {
        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        var raw = JSON.stringify({
        "firstName": firstname,
        "lastName": userInfo.lastName,
        "email": userInfo.userEmail,
        "phoneNum": userInfo.userPhoneNum,
        "id": userInfo.userId
        });

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:5000/api/users", requestOptions)
        .then(response => response.json())
        .then(result => {
            setIsUpdate(!isUpdate);
        })
        .catch(error => console.log('error', error));
        }
        setEditFirstname(!editFirstname);
    }

    const handleSaveLastname = () => {
        if(lastname === '') {
            const token = localStorage.getItem('token')
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + token);
    
            var raw = JSON.stringify({
            "firstName": userInfo.firstName,
            "lastName": userInfo.lastName,
            "email": userInfo.userEmail,
            "phoneNum": userInfo.userPhoneNum,
            "id": userInfo.userId
            });
    
            var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
    
            fetch("http://localhost:5000/api/users", requestOptions)
            .then(response => response.json())
            .then(result => {
                setIsUpdate(!isUpdate);
            })
            .catch(error => console.log('error', error));
            } else {
            const token = localStorage.getItem('token')
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + token);
    
            var raw = JSON.stringify({
            "firstName": userInfo.firstName,
            "lastName": lastname,
            "email": userInfo.userEmail,
            "phoneNum": userInfo.userPhoneNum,
            "id": userInfo.userId
            });
    
            var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
    
            fetch("http://localhost:5000/api/users", requestOptions)
            .then(response => response.json())
            .then(result => {
                setIsUpdate(!isUpdate);
            })
            .catch(error => console.log('error', error));
            }
        setEditLastname(!editLastname);
    }

    const handleSubmitLogout = () => {
        MySwal.fire({
            html : <i>Log Out Success!</i>,
            icon : 'success'
        }).then((value) => {
          localStorage.removeItem('token')
          navigate('/login')
        })
    }

    if(isUpdate){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": userInfo.userEmail
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:5000/api/users/email", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setGetUser(getUser);
            setUserInfo(result.data);
            setIsUpdate(!isUpdate)
        })
        .catch(error => console.log('error', error));
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:5000/api/users/auth", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.success === 1){
                setIsLogin(true);
                setUser(result);
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                "email": result.user.email
                });

                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };

                fetch("http://localhost:5000/api/users/email", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    setGetUser(!getUser);
                    setUserInfo(result.data);
                })
                .catch(error => console.log('error', error));
            }
            else{
                navigate('/login')
            }
        })
        .catch(error => navigate('/login'));
    },[])

    if(isLogin) {
        return(
            <>
                <Header user={user} isLogin={isLogin}/>
                <div className="container">
                    <div className="profile-con">
                        <div className="profile-text">
                            <h1>Profile</h1>
                            <div className="profile-info">
                                { getUser ? ( 
                                    <div className="profile-info">
                                        {editFirstname ? (
                                        <div className="profile-info">
                                         <p> Firstname : <input type="text"
                                         className="profile-input" placeholder="Firstname"
                                         value={firstname}
                                         onChange={(e) => setFirstName(e.target.value)} />
                                         <button type="submit" className="profile-edit-btn" onClick={handleSaveFirstname}>Save</button>
                                        </p> 
                                        </div>  
                                        ):
                                        <p> Firstname : {userInfo.firstName} 
                                            <button type="submit" className="profile-edit-btn" onClick={handleSubmitFirstname}>Edit</button> 
                                        </p>
                                        }
                                        {editLastname ? (
                                         <p> Lastname : <input type="text"
                                         className="profile-input" placeholder="Lastname"
                                         value={lastname}
                                         onChange={(e) => setLastName(e.target.value)} />
                                         <button type="submit" className="profile-edit-btn" onClick={handleSaveLastname}>Save</button>
                                        </p>   
                                        ):
                                        <p> Lastname : {userInfo.lastName} 
                                        <button type="submit" className="profile-edit-btn" onClick={handleSubmitLastname}>Edit</button> 
                                        </p>
                                        }
                                        <p> Email : {userInfo.userEmail} 
                                        </p>
                                        <p> Phone : {userInfo.userPhoneNum} </p>
                                        <button type="submit" className="profile-submit-btn" onClick={handleSubmitLogout}>Logout</button>
                                    </div>
                                    ) : 
                                    <div className="profile-info">
                                        <p> Firstname : Loading... </p>
                                        <p> Lastname : Loading... </p>
                                        <p> Email : Loading... </p>
                                        <p> Phone : Loading... </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else{
        navigate('/login');
    }
}

export default Profile;