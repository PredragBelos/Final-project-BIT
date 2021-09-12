import React, { useEffect, useState } from "react";
import { getCandidate, getInterview } from "../../services/apiServices";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import PreviewDetails from "../Preview Details/previewDetails";
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
            setCandidateInterviews(result.filter(item => { return item.candidateId === candidateId}));
        })

    }, [candidateId])



    //FUNCTIONS

    console.log(candidateInterviews);

    //RENDER
    if (curentCandidate !== "") {
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

                    <h1 className="candidateInterviewTableHeading">Reports</h1>

                    {/* Interview table */}

                    <section className="candidateInterviews">

                        <table align="center" className="interviewTable">

                            <tbody>

                                <tr className="interviewTableHeading">

                                    <td>Company</td>

                                    <td>Interview Date</td>

                                    <td colSpan="2" className="tableStatus">Status</td>

                                </tr>

                                {
                                    candidateInterviews.map(interview => {

                                        return (
                                            <tr className="interviewTableRow" key={interview.interviewID}>

                                            <td>{interview.companyName}</td>

                                            <td>{interview.getInterviewDate()}</td>
        
                                            <td>{interview.status}</td>
        
                                            <td className="reportOverview">
                                                
                                                < PreviewDetails interview={interview} />
                                                
                                            </td>
        
                                        </tr>

                                        )
                                    })
                                }

                            </tbody>

                        </table>

                    </section>

                </section>

                <Footer />

            </div>
        );
    }
    else {
        return <div></div>;
    }

}

export default CandidateReportPage;