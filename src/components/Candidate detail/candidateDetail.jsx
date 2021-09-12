import React from 'react';
import './css/candidateDetail.css';


function CandidateDetail({curentCandidate}) {

    //STATE

    //LIFECICLE

    //FUNCTIONS

    //RENDER
    return (
        <section className="container candidateDetail">
            <div className="candidateDta">
                
                <div className="candidateImg">

                </div>

                <div className="candidateInfos">
                    <div className="aboutCandidate">
                        <div className="infoBorder clearBorder">

                            <p className="smaller">Name:</p>
                            <p className="bigger">{curentCandidate[0].name}</p>

                        </div>

                        <div className="infoBorder">

                            <p className="smaller">Email:</p>
                            <p className="bigger">{curentCandidate[0].email}</p>

                        </div>
                    </div>

                    <div className="aboutCandidate">
                        <div className="infoBorder">

                            <p className="smaller">Date of birth:</p>
                            <p className="bigger">{curentCandidate[0].getBirthday()}</p>

                        </div>

                        <div className="infoBorder">

                            <p className="smaller">Education:</p>
                            <p className="bigger">{curentCandidate[0].education}</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CandidateDetail;