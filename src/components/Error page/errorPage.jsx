import React from 'react';
import './css/errorPage.css';

const ErrorPage = () => {
    return (
        <div className="errorPage">

            <div className="errorMessage">
                <p>Connection with server is not established. Please try again later. </p>
            </div>
            
        </div>
    );
}

export default ErrorPage;