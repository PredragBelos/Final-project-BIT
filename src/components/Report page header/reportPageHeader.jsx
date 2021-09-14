import React from 'react';
import './css/reportPageHeader.css';

const ReportPageHeader = () => {

    //STATE

    //LIFECICLE

    //FUNCTIONS

    //RENDER
    return (
        <header className="container-flow reportPageHeader" >

            <div className="container reportHeaderContainer">

                <div className="row reportHeaderRow">

                    <div className="reportsL">
                        <p className="reportLogoText">Reports Administration</p>
                    </div>

                    <div className="reportsOpt">
                        <div className="previewReports btnStile">Reports</div>
                        <div className="createReportOpt btnStile">Create Report</div>
                    </div>

                </div>

            </div>

        </header>
    );
}

export default ReportPageHeader;