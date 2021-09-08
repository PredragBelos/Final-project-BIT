import React from 'react';
import './css/candidate.css';

const CandidateCard = ({name, image, email}) => {
    //STATE

    //LIFECICLE

    //FUNCTIONS

    //RENDER
    return (
        <div className="cardBorder col-3">
            <div className="card">
                <div className="candidateImage" style={{backgroundImage: `url(${image})`}}>
                    
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