import React from 'react';
import { Link } from 'react-router-dom';
import { candidatesIcon } from '../../shared/publicData';
import CandidateIcon from '../Candidate icon/candidateIcon';
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
                    <p className="logoText">Interviews Reports</p>
                </div>

                <div className="candidatesSection">

                    <div className="candidatesBtn">
                        <CandidateIcon/>
                        <Link className="candidateLink" to="/home">Candidates</Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Header;