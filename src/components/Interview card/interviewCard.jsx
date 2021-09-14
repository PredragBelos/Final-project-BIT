import React from 'react';
import './css/interviewCard.css';

const InterviewCard = () => {

    //STATE

    //LIFECICLE

    //FUNCTIONS

    //RENDER
    return (
        <div className="interviewCard">
            <div className="repCompany">
                <p className="repValue">International Logistics</p>
                <p className="repTitle">Company</p>
            </div>

            <div className="repCandidate">
                <p className="repValue">Nikol Hystonberg</p>
                <p className="repTitle">Candidate</p>
            </div>

            <div className="repDate">
                <p className="repValue">25.08.2021.</p>
                <p className="repTitle">Interview Date</p>
            </div>

            <div className="repStatus">
                <p className="repValue">passed</p>
                <p className="repTitle">Status</p>
            </div>

            <div className="repBtns">
                <img src="https://icon-library.com/images/more-icon/more-icon-16.jpg" alt="det.." />
                <img src="https://static.vecteezy.com/system/resources/thumbnails/001/192/558/small/x-line.png" alt="det.." />
            </div>
        </div>
    );
}

export default InterviewCard;