import React from 'react';
import { getInterview } from '../../services/apiServices';
import CandidateCards from '../Candidate cards/candidateCards';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import './css/homePage.css';

const HomePage = () => {
    //STATE

    //LIFECICLE

    //FUNCTIONS
    getInterview();
    //RENDER
    return (
        <div className="container-flow homePage">
                <Header />
                <CandidateCards />
                <Footer />
        </div>
    );
};

export default HomePage;