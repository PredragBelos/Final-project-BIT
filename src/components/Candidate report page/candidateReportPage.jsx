import React, { useEffect, useState } from "react";
import { getCandidate, getInterview } from "../../services/apiServices";
import CandidateDetail from "../Candidate detail/candidateDetail";
import CandidateInterviews from "../Candidate interviews/candidateInterviews";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./css/candidateReportPage.css";

const CandidateReportPage = (props) => {
    //STATE
    const [curentCandidate, setCurentCandidate] = useState("");
    const [candidateInterviews, setCandidateInterviews] = useState([]);

    let candidateId = parseInt(props.match.params.name.slice(1, props.match.params.name.length));


    //LIFECICLE
    useEffect(() => {

        /*Set curent candidate*/
        getCandidate().then(result => {
            setCurentCandidate(result.filter(item => { return item.id === candidateId }));
        })

        /*Set candidate interviews*/
        getInterview().then(result => {
            setCandidateInterviews(result.filter(item => { return item.candidateId === candidateId }));
        })

    }, [candidateId])


    //FUNCTIONS


    //RENDER
    if (curentCandidate !== "") {
        return (
            <>
                <Header />

                <div className="centralSection">

                    <CandidateDetail curentCandidate={curentCandidate} />

                    <div className=" container candidateReportPageHeadein">
                        <h1 className="candidateInterviewTableHeading">Reports</h1>
                    </div>

                    <CandidateInterviews candidateInterviews={candidateInterviews} />

                </div>

                <Footer />
            </>
        );
    }
    else {
        return <div></div>;
    }
}

export default CandidateReportPage;