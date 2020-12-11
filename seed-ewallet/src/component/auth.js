import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const API_LOGIN_URL = "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login";
const API_KEY =  "hVEEbI23nv4edfhWFkbLr11WQ9KL0mtU8paHpkJE";


function LoginAuth(props){
    const [userInfo, setUserInfo] = useState(null);
    let content;

    useEffect(()=>{
        axios({
            method: 'post',
            url: API_LOGIN_URL,
            headers: {"x-api-key": API_KEY},
            data:{
            "username":props.username,
            "password":props.password
        }})
        .then(rsp => {
            setUserInfo(rsp.data);
            localStorage.setItem("isLoggingIn", 'false'); 
            localStorage.setItem('UserIsLoggedIn', 'true');
            localStorage.setItem('UserInfo', JSON.stringify(rsp.data));
            //console.log(rsp.status)
        });

    }, []);

    if (userInfo){
        content = (
            <div>
                <ul>
                    <li>Status: Logged in</li>
                    <li>Name: {userInfo.firstName} {userInfo.lastName}</li>
                    <li>Nric: {userInfo.nric}</li>
                    <li>Gender: {userInfo.gender}</li>
                    <li>Age: {userInfo.age}</li>
                    <li>Address: {userInfo.address}</li>
                    <li>Email: {userInfo.email}</li>
                </ul>
            </div>
           );

    }

    return <div>{content}</div>
}

export default LoginAuth;
  