import React, { useState } from 'react'
import "../Register/register.css"
import Alert from '../../Components/Alert/Alert';
import Button from '@mui/material/Button';
import { Link, useNavigate, } from "react-router-dom";
import NavBar from '../../Components/Navbar/NavBar'


function login() {
    const navigate = useNavigate()
    const [alertType, setAlertType] = useState("nothing");
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    function handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]:value
        })
    }

    function handleLogin(e){
        e.preventDefault()

        if(user.email && user.password){
            setAlertType("succes");
            if(user.email == "admin@gmail.com" && user.password === "123456")
                navigate(`/admin/tools`)
            else setAlertType("invalid");
        }else{
            setAlertType("error");
        }
    }
    
    return (
        <>
        <NavBar  style={{opacity: "1"}} />
        <div className="registerPage">

            

            <div className="registerForm">
            <h1>Welcome Back</h1>
            
            <div className="data-div main">
                <form>              
                <Alert type={alertType}/>
                    <div className='input-container'>
                        <input type="email" name="email" className="email" placeholder="Email address"
                            onChange={handleOnChange} value={user.email}
                        />
                        <input type="text" name="password" className="password" placeholder="Password"
                            onChange={handleOnChange} value={user.password} autoComplete="off"
                        />
                    </div>
                    {/* <div className='login-line'>
                        <p>Need a Techie tool account? It’s free
                            <Link to="/register">
                                <span className="login"> Sign up</span>
                            </Link>
                        </p>
                    </div> */}
                    <div className="btn-container">
                        <Button className='payment-btn' variant="contained"
                        onClick={handleLogin}>
                            <span>Log in</span>
                        </Button> 
                    </div> 
                </form>
            </div>
           </div> 
        </div>
    </>
    )
}

export default login
