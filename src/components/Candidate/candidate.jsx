import React from 'react';
import './css/candidate.css';

const CandidateCard = ({name, email, id}) => {
    //STATE

    //LIFECICLE

    //FUNCTIONS

    /*Function for open candidate report page*/
    const openCandidatePage = () => {
        window.open(window.open(`http://localhost:3000/candidate/:${id}`,"_self"));
    }


    //RENDER
    return (
        <div className="cardBorder col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <div className="card" onClick={openCandidatePage}>
                <div className="candidateImage">
                    
                </div>

                <div className="candidateData">
                    <p className="candidateName">{name}</p>
                    <p className="candidateEmail">{email}</p>
                </div>
            </div>
        </div>
    );
};

export default CandidateCard;