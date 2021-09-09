import React from 'react';
import './css/loginPage.css';

const LoginPage = () => {
    //STATE

    //LIFECICLE

    //FUNCTIONS

    //RENDER
    return (
       
        <div className="loginPage">
            <div className="loginForm animate">
                <div className="loginHeading">
                    <p>Login Form</p>
                </div>

                <div className="loginInput">
                    <div>
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" name="uname" required/>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" name="psw" required/>
                    </div>

                    <div className="loginBtn">
                        <button type="submit">Login</button>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default LoginPage;