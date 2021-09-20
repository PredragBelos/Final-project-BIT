import React from 'react';
import './css/reportPageSearch.css';

const ReportPageSearch = ({interviews, setFilteredInterviews}) => {

    //STATE

    //LIFECICLE

    //FUNCTIONS

    /*Function for search interview per candidate or company*/
    const searchCandidateOrCompany = (e) => {
        let result = interviews.filter(interview => {
            return interview.filterParams.toUpperCase().includes(e.target.value.toUpperCase());
        });

        setFilteredInterviews(result);
    }

    //RENDER
    return (
        <div className="reportPageSearch">
            <div className="reportPageSearchHeading">
                <p className="reportPageSearcTxt">Reports</p>
            </div>
            <div className="reportPageSearchInput">
                <input onChange={searchCandidateOrCompany} className="reportsSearch" type="text" name="searchInterview" placeholder="Search" />
            </div>
        </div>
    );
}

export default ReportPageSearch;