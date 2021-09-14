import React from 'react';
import InterviewCard from '../Interview card/interviewCard';
import ReportPageSearch from '../Report page searchbox/reportPageSearch';
import './css/interviewList.css';

const InterviewList = () => {

    //STATE

    //LIFECICLE

    //FUNCTIONS

    //RENDER
    return (
        <div className="container interviewList">
            <ReportPageSearch/>
            <InterviewCard/>
            <InterviewCard/>
            <InterviewCard/>
            <InterviewCard/>
        </div>
    );
}

export default InterviewList;