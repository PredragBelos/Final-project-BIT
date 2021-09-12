import React from 'react';
import PreviewDetails from '../Preview Details/previewDetails';
import './css/candidateInterviews.css';


function CandidateInterviews({candidateInterviews}) {
    return (
        <section className=" container candidateInterviews">
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
    );
}

export default CandidateInterviews;