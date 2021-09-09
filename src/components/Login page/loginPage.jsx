import React, { useEffect, useState } from 'react';
import { homePageUrl, loginUrl } from '../../shared/publicData';
import './css/loginPage.css';

const LoginPage = () => {
    //STATE
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");


    //LIFECICLE
    useEffect(() => {
        setUsernameInput(document.querySelector("#usernameInput"));
        setPasswordInput(document.querySelector("#passwordInput"));

    }, [])

    //FUNCTIONS

    /* Function for login to home page */
    async function login() {
        return await fetch(
            loginUrl,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: "dev@dev.com", password: "developer" }),
            }
        )
            .then(request => {
                return request.json();
            })
            .then(result => {
                localStorage.setItem("apiKey", result.accessToken);

                let username = usernameInput.value;
                let password = passwordInput.value;

                if (username === "dev@dev.com" && password === "developer") {
                    window.open(homePageUrl,"_self");
                } else {
                    usernameInput.value ="";
                    passwordInput.value= "";
                    
                    alert("Username or password is incorrect!");
                }
            })
    }


    //RENDER
    return (

        <div className="loginPage">
            <div className="loginForm animate">
                
                <div className="loginHeading">
                    <p className="formHeading">Login Form</p>
                </div>

                <div className="loginInput">
                    <div>
                        <label className="loginFormLabel" htmlFor="uname"><b>Username</b></label>
                        <input className="loginFormInput" id="usernameInput" type="text" name="uname" required />

                        <label className="loginFormLabel" htmlFor="psw"><b>Password</b></label>
                        <input className="loginFormInput" id="passwordInput" type="password" name="psw" required />
                    </div>

                    <div className="loginBtn">
                        <button className="loginButton" type="submit" onClick={login}>Login</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default LoginPage;