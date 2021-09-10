import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./css/candidateReportPage.css";

const CandidateReportPage = () => {
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

                                <p className="bigger">Josefina Higgins</p>

                            </div>

                            <div className="infoBorder">

                                <p className="smaller">Email:</p>

                                <p className="bigger">josefina.higgins@gmail.com</p>

                            </div>

                        </div>

                        <div className="aboutCandidate">

                            <div className="infoBorder">

                                <p className="smaller">Date of birth:</p>

                                <p className="bigger">01.01.1991.</p>

                            </div>

                            <div className="infoBorder">

                                <p className="smaller">Education:</p>

                                <p className="bigger">Belgrade Institute of Technology</p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </div>

    );
}

export default CandidateReportPage;