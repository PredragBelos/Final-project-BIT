import React from 'react';
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
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PrxTVZdfUDOdYQsDHBY8wYkw2yPqVjH4a41tQ_vbwr27aQC4id1Mv2LJucuazQQOSe0&usqp=CAU" alt="det.." />
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