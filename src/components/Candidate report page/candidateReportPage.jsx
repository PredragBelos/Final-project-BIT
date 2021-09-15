import React, { useEffect, useState } from "react";
import { getCandidate, getInterview } from "../../services/apiServices";
import CandidateDetail from "../Candidate detail/candidateDetail";
import CandidateInterviews from "../Candidate interviews/candidateInterviews";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Modal from "../Modal/modal";
import "./css/candidateReportPage.css";

const CandidateReportPage = (props) => {
    //STATE
    const [curentCandidate, setCurentCandidate] = useState("");
    const [candidateInterviews, setCandidateInterviews] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [interviewId, setInterviewID] = useState(0);
    const [interview, setInterview] = useState([]);

    let candidateId = parseInt(props.match.params.name.slice(1, props.match.params.name.length));


    //LIFECICLE
    useEffect(() => {

        /*Set curent candidate*/
        getCandidate().then(result => {
            setCurentCandidate(result.filter(item => { return item.id === candidateId }));
        })
        .catch(() => {
            window.open("http://localhost:3000/error","_self");
        })

        /*Set candidate interviews*/
        getInterview().then(result => {
            setCandidateInterviews(result.filter(item => { return item.candidateId === candidateId }));
        })
        .catch(() => {
            window.open("http://localhost:3000/error","_self");
        })

        /*Set interview*/
        getInterview().then(result => {
            setInterview(result.filter(item => { return parseInt(item.interviewID) === parseInt(interviewId)}));
        })
        .catch(() => {
            window.open("http://localhost:3000/error","_self");
        })

    }, [interviewId, candidateId])


    //FUNCTIONS
    const setModalVisibilityProps = modalVisibility => setModalVisibility(modalVisibility);
    const setInterviewIDProps = interviewId => setInterviewID(interviewId);


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

                    <CandidateInterviews candidateInterviews={candidateInterviews} setModalVisibility={setModalVisibilityProps} setInterviewID={setInterviewIDProps} />
                    
                    <Modal modalVisibility={modalVisibility} setModalVisibility={setModalVisibilityProps} interview={interview} />

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