import React from 'react';
import { Link } from 'react-router-dom';
import { candidatesIcon } from '../../shared/publicData';
import './css/header.css';

const Header = () => {
    //STATE

    //LIFECICLE

    //FUNCTIONS

    //RENDER
    return (
        <div className="container-flow header">
            <div className="container headerContainer">
                <div className="logo">
                    <p>Interviews Reports</p>
                </div>

                <div className="candidatesSection">
                    <div className="candidatesBtn">
                        {candidatesIcon}
                        <Link href="#">Candidates</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;