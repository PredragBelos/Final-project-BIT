import React from 'react';
import Modal from '../Modal/modal';
import './css/interviewCard.css';

const InterviewCard = ({interview}) => {

    //STATE

    //LIFECICLE

    //FUNCTIONS

    //RENDER
    return (
        <div className="interviewCard">
            <div className="repCompany">
                <p className="repValue">{interview.companyName}</p>
                <p className="repTitle">Company</p>
            </div>

            <div className="repCandidate">
                <p className="repValue">{interview.candidateName}</p>
                <p className="repTitle">Candidate</p>
            </div>

            <div className="repDate">
                <p className="repValue">{interview.getInterviewDate()}</p>
                <p className="repTitle">Interview Date</p>
            </div>

            <div className="repStatus">
                <p className="repValue">{interview.status}</p>
                <p className="repTitle">Status</p>
            </div>

            <div className="repBtns">
                <img id={interview.interviewID} src="https://icon-library.com/images/more-icon/more-icon-16.jpg" alt="det.." />
                <img src="https://static.vecteezy.com/system/resources/thumbnails/001/192/558/small/x-line.png" alt="det.." />
            </div>

            
        </div>
    );
}

export default InterviewCard;