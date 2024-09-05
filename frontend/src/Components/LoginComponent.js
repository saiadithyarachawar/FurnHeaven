import React from 'react'
import './logo.png';
import '../styles/LoginComponent.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function LoginComponent()
{  
    const navigate=useNavigate();
    const [token,setToken]=useState()
    console.log(token);
    const handleLogin = async () => {   
        try{
          const response = await axios.post("http://localhost:3001/login", {
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        });
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("name",response.data.name);
          setToken(response.data.token);
          navigate(response.data.role === "admin" ? '/admindashboard' : '/dashboard');
        } else {
          navigate("/signup");
        }
        }
        catch(error){
          alert("User Does not exists")
          navigate("/signup")
        }
      };
    return(
    <>
        <div id="loginBox">
            <img src={require('./logo.png')}  alt="logo" srcset="" width="50px" height="50px" title="FurniHaven"/>
            <input id="email" type="email" placeholder="Email" />
            <input id="password" type="password" placeholder="Password" />
            <button id="submitButton" onClick={()=>handleLogin()}>Login</button>
            <Link to="/signup"   id="signinLink">Sign up instead</Link>
        </div>
    </>
    );
}
export default LoginComponent;