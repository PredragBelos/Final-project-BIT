import React, { useEffect, useState } from "react";
import { getCandidate } from "../../services/apiServices";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./css/candidateReportPage.css";

const CandidateReportPage = (props) => {
    //STATE
    const [curentCandidate, setCurentCandidate] = useState("");
    
    let candidateId = parseInt(props.match.params.name.slice(1, props.match.params.name.length));

    //LIFECICLE
    useEffect(() => {
        
        /*Set curent candidate*/
        getCandidate().then(result => {
            setCurentCandidate(result.filter(item => {return item.id === candidateId}));
        })

    },[candidateId])


    //FUNCTIONS
    

    //RENDER
    if(curentCandidate !== ""){
        return (
            <div className="interviewReports">
    
                <Header />
    
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
    
                <Footer />
    
            </div>
        );
    }
    else{
        return <div></div>;
    }
   
}

export default CandidateReportPage;