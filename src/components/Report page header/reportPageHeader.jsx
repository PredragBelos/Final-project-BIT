import React from 'react';
import './css/reportPageHeader.css';

const ReportPageHeader = () => {

    //STATE

    //LIFECICLE

    //FUNCTIONS

    //RENDER
    return (
        <header className="container-flow reportPageHeader" >
            <div className=" container reportHeaderContainer">
                <div className="reportsLog">
                    <p className="reportLogoText">Reports Administration</p>
                </div>
                <div className="reportsOptions">
                    <div className="previewReports">Reports</div>
                    <div className="createReportOpt">Crete Report</div>
                </div>
            </div>
        </header>
    );
}

export default ReportPageHeader;